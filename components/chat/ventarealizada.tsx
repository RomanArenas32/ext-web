import { ArrowLeft, ChevronLeft, Copy } from 'lucide-react'
import Link from 'next/link'

export default function OrderDetail() {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen p-6">
      {/* Back Button */}
      <Link href={`/chats/box`}>
       <button className="mb-8">
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      </Link>
     
      {/* Price and Status */}
      <div className="mb-12 text-center">
        <h1 className="text-[32px] font-medium text-gray-900 mb-4">S/ 190.05</h1>
        <div className="space-y-1">
          <p className="text-xl font-medium">Venta realizada</p>
          <p className="text-green-500">Completed</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="space-y-6 mb-12">
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Producto</span>
          <span className="text-gray-900">Polo</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Color</span>
          <span className="text-gray-900">Blanco</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Talla</span>
          <span className="text-gray-900">S</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Cantidad</span>
          <span className="text-gray-900">56</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Metodo de Pago</span>
          <span className="text-gray-900">Transferencia</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Código</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-900">226773847485992749937</span>
            <Copy className="w-5 h-5 text-green-600" />
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-500">Total</span>
          <span className="text-[20px] font-medium">S/ 190.05</span>
        </div>
      </div>

      {/* Order Again Button */}
      <button className="w-full py-4 bg-[#2A4741] text-white rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
        Pedir de nuevo
      </button>
    </div>
  )
}

