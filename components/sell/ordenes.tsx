"use client";
import React, { useState } from 'react';
import { Check, ArrowLeft } from 'lucide-react';

const OrdersView = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-2xl">
      {/* Header */}

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleTabChange('all')}
          className={`px-5 py-2 rounded-full text-sm font-bold ${
            activeTab === 'all' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => handleTabChange('completed')}
          className={`px-4 py-2 rounded-full text-sm font-bold ${
            activeTab === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          Completadas
        </button>
        <button
          onClick={() => handleTabChange('cancelled')}
          className={`px-4 py-2 rounded-full text-sm font-bold ${
            activeTab === 'cancelled' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}
        >
          Canceladas
        </button>
      </div>

      {/* Order Details */}
      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-500 font-bold">Producto</span>
          <span className="font-medium">Polo</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-bold">Color</span>
          <span className="font-medium">Blanco</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-bold">Talla</span>
          <span className="font-medium">S</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-bold">Cantidad</span>
          <span className="font-medium">56</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-bold">Método de Pago</span>
          <span className="font-medium">Transferencia</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 font-bold">Código</span>
          <div className="flex items-center gap-2">
            <span className="font-medium">22673847485992749737</span>
            <Check className="w-6 h-6 text-green-500" />
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 font-bold">Total</span>
          <span className="font-bold text-[18px] text-green-600">S/ 190.05</span>
        </div>
      </div>
    </div>
  );
};

export default OrdersView;
