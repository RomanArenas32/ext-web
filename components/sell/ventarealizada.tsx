import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

const OrderDetail = () => {
  return (
    <div className="w-full ml-4 mr-4 p-4 bg-white rounded-lg h-[500px] shadow-md space-y-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button>
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-2xl font-semibold ml-[90px]">S/ 190.00</h1>
      </div>

      {/* Status */}
      <div className="text-center">
        <p className="text-xl font-semibold text-green-600">Venta realizada</p>
        <p className="text-sm text-green-500">Completed</p>
      </div>

      {/* Order Details */}
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Producto</span>
          <span className="font-medium">Polo</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Color</span>
          <span className="font-medium">Blanco</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Talla</span>
          <span className="font-medium">S</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Cantidad</span>
          <span className="font-medium">56</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Método de Pago</span>
          <span className="font-medium">Transferencia</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Código</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">226773847485992749937</span>
            <Check className="w-4 h-4 text-green-500" />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Total</span>
          <span className="font-bold text-green-600">S/ 190.00</span>
        </div>
      </div>

      {/* Button */}
      <div className="text-center">
        <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700">
          Pedir de nuevo
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
