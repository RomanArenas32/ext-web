"use client";

import { ChevronLeft, MessageSquareMore, AlertTriangle, ClipboardCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function Confirmation() {
  return (
  
      <div className="max-w-md mx-auto rounded-b-2xl space-y-6">
        {/* Header */}
        <div className="bg-green-800 text-white rounded-t-2xl p-6 flex items-center justify-between relative">
          <button className="absolute left-4">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold pl-[130px]">Confirmaci</h1>
        </div>

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
              <p><span className="font-bold">Color:</span> Gris</p>
              <p><span className="font-bold">Talla:</span> S</p>
              <p><span className="font-bold">Cantidad:</span> 56</p>
              <p><span className="font-bold">Método de Pago:</span> Transferencia</p>
              <p><span className="font-bold">Costo de envío:</span> S/18.00</p>
              <p className="flex items-center gap-2">
                <span className="font-bold">Código:</span> 2267738474859927493937
                <ClipboardCheck className="w-6 h-6 text-green-700" />
              </p>
              <p className="text-lg font-bold text-gray-900">Total: S/ 190.00</p>
            </div>
            <Image
              src="/img/camisero.jpg"
              alt="T-Shirt"
              width={96}
              height={96}
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
   
  );
}
