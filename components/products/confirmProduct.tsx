'use client'

import { MessageSquareMore, ClipboardCheck, CircleAlert } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Header } from '../common/header'
import { useEffect, useState } from 'react'
import { createOrder } from '@/actions/orders'

interface ConfirmationProps {
  productDetails: {
    _id: string
    color: string
    size: string
    quantity: number
    totalPrice: number
    name: string
  }
}

export function Confirmation({ productDetails }: ConfirmationProps) {
  const [orderStatus, setOrderStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [order, setOrder] = useState<any>({
    productId: productDetails._id,
    code: new Date().getTime().toString(),
    status: 'pending'
  })

  useEffect(() => {
    const generateOrder = async () => {

console.log("Order", order)
      try {
        const result = await createOrder(order)
        console.log("Result", result) 
        if (result.success) {
          setOrderStatus('success')
        } else {
          setOrderStatus('error')
        }
      } catch (error) {
        console.error('Error generating order:', error)
        setOrderStatus('error')
      }
    }

    generateOrder()
  }, [productDetails._id])

  if (orderStatus === 'loading') {
    return <div className='min-h-screen grid place-items-center'>Loading...</div>
  }

  if (orderStatus === 'error') {
    return <div className='min-h-screen grid place-items-center'>Error creating order. Please try again.</div>
  }

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
            <Link href={"/chat"}>
              <button className="flex items-center bg-green-700 text-white px-4 py-2 font-medium rounded-full text-sm hover:bg-green-800">
                Chat
                <MessageSquareMore className="w-4 h-4 ml-2" />
              </button>
            </Link>
            {/* Indicador de notificaciones */}
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              1
            </span>
          </div>
        </div>
        {/* Product Details */}
        <div className="px-6 py-4">
          <div className="flex items-start justify-between">
            <h2 className="text-[16px] font-semibold text-red-500">{productDetails?.name || ""}</h2>
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
              <p className="font-medium text-gray-900 items-end text-end">{productDetails.color}</p>

              <p className="text-gray-600">Talla:</p>
              <p className="font-medium text-gray-900 text-end">{productDetails.size}</p>

              <p className="text-gray-600">Cantidad:</p>
              <p className="font-medium text-gray-900 text-end">{productDetails.quantity}</p>

              <p className="text-gray-600">Método de Pago:</p>
              <p className="font-medium text-gray-900 text-end">Transferencia</p>

              <p className="text-gray-600">Costo de envío:</p>
              <p className="font-medium text-gray-900 text-end">S/18.00</p>

              <p className="text-gray-600">Total: </p>
              <p className="font-medium text-gray-900 text-end">S/ {productDetails.totalPrice.toFixed(2)}</p>

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
      <div className="py-4 flex flex-col gap-4 w-full justify-center items-center">
        <Button
          variant="secondary"
          className="bg-[#E6E6E6] text-[#999999] text-[16px] py-3 px-4 rounded-3xl text-center font-bold cursor-not-allowed  h-[52px] w-[281px]"
          disabled
        >
          Producto recibido
        </Button>
        <Button
          variant="ghost"
          className="bg-white text-[#1A4B3D] text-[16px] py-3 px-4 rounded-3xl text-center font-bold  h-[52px] border-none w-[281px]"
        >
          Cancelar
        </Button>
      </div>
    </div>
  )
}

