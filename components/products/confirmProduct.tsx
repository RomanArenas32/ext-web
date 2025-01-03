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
  console.log("Product Details", productDetails)
  return (
    <div className="max-w-md mx-auto rounded-b-2xl space-y-6">
      <header className="bg-white  flex flex-row items-center w-fulls relative p-4">
        <Link href={"/products"}>
          <button className="items-center flex justify-center absolute left-6">
            <ChevronLeft className="text-[#12332A]" />
          </button>
        </Link>
        <div className="w-full">
          <h1 className="text-[18px] text-nowrap font-bold absolute left-1/2 transform -translate-x-1/2">Confirmación</h1>
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
      <div className="flex items-center px-6 py-4 rounded-lg bg-green-50 shadow-md">
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
