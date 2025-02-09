'use client'

import { MessageSquareMore, ClipboardCheck, CircleAlert } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { Header } from '../common/header'
import { useEffect, useState, useMemo } from 'react'
import { canceledOrder, createOrder } from '@/actions/orders'
import { AlertMessage } from '../ui/alert'
import { createChat } from '@/actions/chats'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Image from 'next/image'

interface ConfirmationProps {
  productDetails: {
    _id: string
    color: string
    size: string
    quantity: number
    totalPrice: number
    name: string
    marketName: string
  }
}

export function Confirmation({ productDetails }: ConfirmationProps) {
  const router = useRouter()
  const [orderStatus, setOrderStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [order, setOrder] = useState<any>(null)
  const [chat, setChat] = useState<any>(null)
  const initialOrder = useMemo(() => ({
    productId: productDetails._id,
    status: 'pending',
    total: productDetails.totalPrice,
    name: productDetails.name,
    color: productDetails.color,
    size: productDetails.size,
    quantity: productDetails.quantity,
    seller: productDetails?.marketName,
  }), [productDetails])

  useEffect(() => {
    async function generateOrder() {
      try {
        const result = await createOrder(initialOrder)
        if (result.success) {
          setOrder(result.order)
          setOrderStatus('success')
          const response = await createChat({ code: result.order.code, seller: result.order.seller })
          setChat(response.chat)
          return;
        } else {
          return;
        }

      } catch (error) {
        console.error('Error generating order:', error)
        setOrderStatus('error')
      }
    }
    generateOrder()

  }, [])
  console.log(chat)
  const canceled = async () => {
    const id = order._id
    try {
      const response = await canceledOrder(id)
      if (response.success) {
        toast.success("Orden cancelada exitosamente")
        router.push('/products')
      } else {
        console.error("Failed to cancel order:", response.error)
      }   
    } catch (error) {
      console.error("Error cancelling order:", error)
    }
  }


  if (orderStatus === 'loading') {
    return <div className='min-h-screen grid place-items-center'>Generando orden...</div>
  }



  if (orderStatus === 'success' && order) {
    return (
      <div className="flex flex-col min-h-screen justify-between">
        <div>
          <Header text="Confirmación" link="/products" />
          <Separator />
          {/* Countdown */}
          <div className="px-6 py-4">
            <p className="text-sm font-bold text-gray-700">
              La compra se cancela en <span className="text-orange-500">5:00:48s</span>
            </p>
          </div>

          {/* Store Information */}
          <div className="flex items-center px-6 py-4 rounded-lg bg-[#F0F9F5] shadow-md">
            {/* Avatar */}
            <div className="flex items-center justify-center h-10 w-10 bg-green-600 text-white rounded-full font-bold text-[16px]">
              K
            </div>

            {/* Información del negocio */}
            <div className="ml-4 flex flex-col">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold text-gray-800">KellyFashion</h1>
                <Image
                  src="/icon/check.svg"
                  alt="green check"
                  width={18}
                  height={18}
                  className="ml-2"
                />
              </div>
              <span className="text-sm text-gray-600">Kelly Castellanos Tejeda</span>
            </div>

            {/* Botón de chat */}
            <div className="relative ml-auto">
              {chat !== null ? (

                <Link href={`/chats/${chat._id}`}>
                  <button className="flex items-center bg-green-700 text-white px-4 py-2 font-medium rounded-full text-sm hover:bg-green-800">
                    Chat
                    <MessageSquareMore className="w-4 h-4 ml-2" />
                  </button>
                </Link>)
                :
                <button className="flex items-center bg-gray-400 text-white px-4 py-2 font-medium rounded-full text-sm disabled:cursor-not-allowed">
                  Chat
                  <MessageSquareMore className="w-4 h-4 ml-2" />
                </button>
              }

              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                1
              </span>
            </div>
          </div>
          {/* Product Details */}
          <div className="px-6 py-4">
            <div className="flex items-start justify-between">
              <h2 className="text-[16px] font-semibold text-red-500">{order.name}</h2>
              <Image
                src="/img/poloama.jpg"
                alt="T-Shirt"
                width={24}
                height={24}
                className="w-[50px] h-[50px] object-cover"
              />
            </div>
            <div className="mt-4 space-y-2 text-[14px] py-4">
              <div className="grid grid-cols-2 gap-[2px]">
                <p className="text-gray-600">Color:</p>
                <p className="font-medium text-gray-900 items-end text-end">{order.color}</p>

                <p className="text-gray-600">Talla:</p>
                <p className="font-medium text-gray-900 text-end">{order.size}</p>

                <p className="text-gray-600">Cantidad:</p>
                <p className="font-medium text-gray-900 text-end">{order.quantity}</p>

                <p className="text-gray-600">Método de Pago:</p>
                <p className="font-medium text-gray-900 text-end">Transferencia</p>

                <p className="text-gray-600">Costo de envío:</p>
                <p className="font-medium text-gray-900 text-end">S/18.00</p>

                <p className="text-gray-600">Total: </p>
                <p className="font-medium text-gray-900 text-end">S/ {order.total.toFixed(2)}</p>

                <p className="text-gray-600">Código:</p>
                <div className='flex flex-row justify-between text-end gap-2 items-end'>
                  <p className="font-medium text-gray-900 text-end w-full">{order.code}</p>
                  <ClipboardCheck className="w-5 h-5 text-green-700" />
                </div>
              </div>
            </div>
            <Separator className='text-[#E3DFDF]' />
          </div>

          {/* Alert Message */}
          <div className="py-4 bg-gradient-to-r from-yellow-100 to-yellow-50 border-l-4  rounded-md mt-4 w-full">
            <div className="flex items-start px-6 gap-2">
              <CircleAlert className="text-yellow-500 w-8 h-8" />
              <p className="text-[12px] text-[#12332A]">
                <span className="font-bold text-red-500">ATENCIÓN:</span> Si cancelas el pedido antes de la entrega se te cobrará una comisión.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="py-4 flex flex-col gap-4 w-full justify-center items-center h-full pb-[70px]">
          <Button
            variant="secondary"
            className="bg-[#E6E6E6] text-[#999999] text-[16px] py-3 px-4 rounded-3xl text-center font-bold cursor-not-allowed  h-[52px] w-[281px]"
            disabled
          >
            Producto recibido
          </Button>
          <AlertMessage
            onSubmit={canceled}
            text="Cancelar"
            className="bg-red-50 text-[#1A4B3D] text-[16px] border-none py-3 px-4 rounded-3xl text-center font-bold h-[52px] w-[281px] focus:outline-none"
            title="¿Estás seguro de que quieres cancelar la orden?"
            description="Esta acción no se puede deshacer."
          />
        </div>
      </div>
    )
  }
}

