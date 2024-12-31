import { ArrowLeft, ChevronLeft, Copy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
      <div className="flex items-center justify-center">
        <Image
          src="/img/Check.svg"
          alt="green check"
          width={32}
          height={32}
          className="w-[70px] h-[70px] text-[#86efac]"
        />
      </div>

      <div className="mb-12 text-center">
        <h1 className="text-[32px] pt-4 font-bold font text-gray-900">
          S/ 190.00
        </h1>
        <div className="space-y-1">
          <p className="text-xl text-green-600">Venta exitosa</p>
        </div>
      </div>

      {/* Order Details */}
      <div className="space-y-4 mb-12">
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold">Producto</span>
          <span className="text-gray-900 font-bold">Polo</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold">Color</span>
          <span className="text-gray-900 font-bold">Blanco</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold">Talla</span>
          <span className="text-gray-900 font-bold">S</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold">Cantidad</span>
          <span className="text-gray-900 font-bold">56 uni</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold">Metodo de Pago</span>
          <span className="text-gray-900 font-bold">Transferencia</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold">Código</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-bold">485992749937</span>
            <Copy className="w-5 h-5 text-green-600" />
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <span className="text-gray-500 font-bold">Total</span>
          <span className="text-[20px] font-bold">S/ 190.00</span>
        </div>
      </div>

      {/* Order Again Button */}
      <div className="gap-4">
      <button className="w-full py-4 bg-green-900 text-white rounded-full text-lg font-medium">
        Ir al inicio
      </button>
      <span className="w-full py-4 gap-y-4 text-green-800 flex items-center justify-center text-lg font-medium">
        Ir a mis pedidos
      </span>
    </div>
    </div>
  );
}
