"use client";

import { ChevronLeft, MessageSquareMore, AlertTriangle, ClipboardCheck } from 'lucide-react';
import Image from 'next/image';
export default function Confirm2() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center py-8">
      <div className="bg-white w-full max-w-md rounded-lg overflow-hidden shadow-lg">
        {/* Header */}
        <div className="bg-green-800 text-white p-6 flex items-center justify-between relative">
          <button className="absolute left-4">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold pl-[130px]">Confirmación</h1>
        </div>

        {/* Countdown */}
        <div className="px-6 py-4">
          <p className="text-sm text-gray-700">
            La compra se cancela en <span className="text-orange-500">5:00:48s</span>
          </p>
        </div>

        {/* Store Information */}
        <div className="px-6 py-4 bg-green-50 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-green-700 font-semibold">Negocio 1 <span className="text-green-500">✔</span></p>
            <p className="text-sm text-gray-700">Contacto: Tucto Gladys Karol</p>
          </div>
          <button className="flex items-center bg-green-600 text-white px-4 py-1 rounded-full text-sm">
            Chat <MessageSquareMore  className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Product Details */}
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-red-500">Polo</h2>
          <div className="flex items-center justify-between mt-4">
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-medium">Color:</span> Gris</p>
              <p><span className="font-medium">Talla:</span> S</p>
              <p><span className="font-medium">Cantidad:</span> 56</p>
              <p><span className="font-medium">Método de Pago:</span> Transferencia</p>
              <p><span className="font-medium">Costo de envío:</span> S/18.00</p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Código:</span> 2267738474859927493937
                <ClipboardCheck className="w-4 h-4 text-green-700" />
              </p>
              <p className="text-lg font-bold text-gray-900">Total: S/ 190.05</p>
            </div>
            <img
              src="/img/camisero.jpg"
              alt="T-Shirt"
              className="w-16 h-16 object-cover"
            />
          </div>
        </div>

        {/* Alert Message */}
        <div className="mx-6 py-4 bg-yellow-100 border-l-4 border-yellow-400 rounded-3xl mt-4">
          <div className="flex items-start px-6 gap-2">
            <AlertTriangle className="text-yellow-500 w-5 h-5" />
            <p className="text-sm text-gray-700">
              <span className="font-semibold">ATENCIÓN:</span> Si cancelas el pedido antes de la entrega se te cobrará una comisión.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="px-6 py-4 flex flex-col gap-4">
          <button
            className="bg-gray-300 text-gray-600 py-2 px-4 rounded-3xl text-center font-medium cursor-not-allowed"
            disabled
          >
            Producto recibido
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-3xl text-center font-medium"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
