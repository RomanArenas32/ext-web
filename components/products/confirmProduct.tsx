'use client'

import { MessageSquareMore, AlertTriangle, ClipboardCheck, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import Image from 'next/image'

interface ConfirmationProps {
  productDetails: {
    _id: string
    color: string
    size: string
    quantity: number
    totalPrice: number
  }
}

export function Confirmation({ productDetails }: ConfirmationProps) {
  return (
    <div className="max-w-md mx-auto rounded-b-2xl space-y-6">
       <header className="bg-white  flex flex-row items-center w-fulls relative p-4">
            <Link href={"/products"}>
                <button className="items-center flex justify-center absolute left-6">
                    <ChevronLeft className="text-[#12332A]" />
                </button>
            </Link>
            <div className="w-full">
                <h1 className="text-[18px] text-nowrap font-bold absolute left-1/2 transform -translate-x-1/2">Confirmacion</h1>
            </div>
        </header>
        <Separator />
      {/* Countdown */}
      <div className="px-6 py-4">
        <p className="text-sm font-bold text-gray-700">
          La compra se cancela en <span className="text-orange-500">5:00:48s</span>
        </p>
      </div>

      {/* Store Information */}
      <div className="px-6 py-4 bg-green-50 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-green-700 font-semibold">Gladys .C <span className="text-green-500">✔</span></p>
          <p className="text-sm font-bold text-gray-700">Contacto: Gladys Canales Tejeda </p>
        </div>
        <div className="relative inline-block">
          <Link href={"/chat"}>
            <button className="flex items-center bg-green-600 text-white px-4 py-2 font-bold rounded-full text-sm">
              Chat <MessageSquareMore className="w-4 h-4 ml-2" />
            </button>
          </Link>
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            1
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-red-500">Polo</h2>
        <div className="flex mt-4">
          <div className="space-y-2 text-sm font-bold text-gray-700">
            <p><span className="font-bold">Color:</span> {productDetails.color}</p>
            <p><span className="font-bold">Talla:</span> {productDetails.size}</p>
            <p><span className="font-bold">Cantidad:</span> {productDetails.quantity}</p>
            <p><span className="font-bold">Método de Pago:</span> Transferencia</p>
            <p><span className="font-bold">Costo de envío:</span> S/18.00</p>
            <p className="flex items-center gap-2">
              <span className="font-bold">Código:</span> 2267738474859927493937
              <ClipboardCheck className="w-6 h-6 text-green-700" />
            </p>
            <p className="text-lg font-bold text-gray-900">Total: S/ {productDetails.totalPrice.toFixed(2)}</p>
          </div>
          <Image
            src="/img/poloama.jpg"
            alt="T-Shirt"
            width={24}
            height={24}
            className="w-24 h-24 object-cover"
          />
        </div>
      </div>

      {/* Alert Message */}
      <div className="mx-6 py-4 bg-yellow-100 border-l-4 border-yellow-400 rounded-3xl mt-4">
        <div className="flex items-start px-6 gap-2">
          <AlertTriangle className="text-yellow-500 w-8 h-8" />
          <p className="text-sm font-bold text-gray-700">
            <span className="font-bold text-red-500">ATENCIÓN:</span> Si cancelas el pedido antes de la entrega se te cobrará una comisión.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-6 py-4 flex mx-8 flex-col gap-4">
        <button
          className="bg-green-600 text-white py-3 px-4 rounded-3xl text-center font-bold cursor-not-allowed"
          disabled
        >
          Producto recibido
        </button>
        <button
          className="bg-gray-300 text-black py-3 px-4 rounded-3xl text-center font-bold"
        >
          Cancelar
        </button>
      </div>
    </div>
  )
}
