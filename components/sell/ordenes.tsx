"use client";

import React, { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { getOrders } from '@/actions/orders';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

interface Order {
  _id: string;
  product: string;
  color: string;
  size: string;
  quantity: number;
  paymentMethod: string;
  code: string;
  totalPrice: number;
  status: string;
}

const OrdersView = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await getOrders();
        console.log("Orders response", response);
        if (response.ok) {
          setOrders(response.orders);
        } else {
          setError('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('An error occurred while fetching orders');
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  console.log(orders);

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex flex-row justify-center gap-4 py-4 px-6">
        <button
          onClick={() => handleTabChange('all')}
          className={`px-5 py-2 rounded-full text-sm font-bold ${activeTab === 'all' ? 'bg-[#24765D] text-white' : 'bg-gray-100 text-gray-600'}`}
        >
          Todos
        </button>
        <button
          onClick={() => handleTabChange('completed')}
          className={`px-4 py-2 rounded-full text-sm font-bold ${activeTab === 'completed' ? 'bg-[#24765D] text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Completadas
        </button>
        <button
          onClick={() => handleTabChange('cancelled')}
          className={`px-4 py-2 rounded-full text-sm font-bold ${activeTab === 'cancelled' ? 'bg-[#24765D] text-white' : 'bg-gray-200 text-gray-600'}`}
        >
          Canceladas
        </button>
      </div>

      {/* Order Details */}
      <div className="py-4 px-6 flex flex-col gap-4 mb-32">
        {orders.length === 0 ? (
          <div className='text-center'>No orders found</div>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between">
                <span className="text-[#828282] text-[14px] font-normal">Status</span>
                <span className="font-medium text-[#4F4F4F] text-[14px]">{order.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#828282] text-[14px] font-normal">Método de Pago</span>
                <span className="font-medium text-[#4F4F4F] text-[14px]">{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#828282] text-[14px] font-normal">Código</span>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#4F4F4F] text-[14px]">{order.code}</span>
                  <Copy className="size-4 text-[#63C121]" />
                </div>
              </div>
              <Button
                className="w-full mt-4 bg-[#24765D] text-white hover:bg-[#1c5a47]"
                onClick={() => console.log('Ver Detalles', order._id)}
              >
                Ver Detalles
                <Check className="ml-2 h-4 w-4" />
              </Button>
              <Separator />
            </div>
          ))
        )}
      </div>
   
    </div>
  );
};

export default OrdersView;





   {/*
          
          <div className="flex justify-between">
            <span className="text-[#828282] text-[14px] font-normal">Total</span>
            <span className="font-bold text-[16px] text-[#12332A]">S/ {order.totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#828282] text-[14px] font-normal">Producto</span>
            <span className="font-medium text-[#4F4F4F] text-[14px]">{order.product}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#828282] text-[14px] font-normal">Color</span>
            <span className="font-medium text-[#4F4F4F] text-[14px]">{order.color}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#828282] text-[14px] font-normal">Talla</span>
            <span className="font-medium text-[#4F4F4F] text-[14px]">{order.size}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#828282] text-[14px] font-normal">Cantidad</span>
            <span className="font-medium text-[#4F4F4F] text-[14px]">{order.quantity}</span>
          </div>
          */}