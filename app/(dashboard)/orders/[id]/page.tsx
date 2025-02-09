'use client';

import { ChevronLeft, Copy } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Order } from "@/interfaces/orders";
import { getOrderById } from "@/actions/orders";
import { Header } from "@/components/common/header";
import { TermsDrawer } from "@/components/sell/terms-drawer";
import { FeedbackDrawer } from '@/components/orders/feedback';

export default function Page() {
  const params = useParams();
  const _id = params.id as string;
  const [order, setOrder] = useState<Order | undefined>();
  const [showForm, setShowForm] = useState(false);
  const [showDrawer, setShowDrawer] = useState(true);

  const fetchOrder = useCallback(async () => {
    try {
      const response = await getOrderById(_id);
      setOrder(response.order);
    } catch (error) {
      console.log(error);
    }
  }, [_id]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);


  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen p-6">
      <Header link="/orders" />
        <>
          <div className="flex items-center justify-center">
            <Image
              src="/img/Check.svg"
              alt="green check"
              width={70}
              height={70}
              className="text-[#86efac]"
            />
          </div>

          <div className="mb-12 text-center">
            <h1 className="text-[32px] pt-4 font-bold text-gray-900">
              S/ {order?.total || '190.00'}
            </h1>
            <div className="space-y-1">
              <p className="text-xl text-green-600">Venta exitosa</p>
            </div>
          </div>

          <div className="space-y-4 mb-12">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Producto</span>
              <span className="text-gray-900 font-bold">{order?.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Color</span>
              <span className="text-gray-900 font-bold">{order?.color}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Talla</span>
              <span className="text-gray-900 font-bold">{order?.size}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Cantidad</span>
              <span className="text-gray-900 font-bold">{order?.quantity} uni</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Metodo de Pago</span>
              <span className="text-gray-900 font-bold">{order?.paymentMethod}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 font-bold">Código</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-bold">{order?.code}</span>
                <Copy className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-gray-500 font-bold">Total</span>
              <span className="text-[20px] font-bold">S/ {order?.total}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/products">
              <button className="w-full py-4 bg-green-900 text-white rounded-full text-lg font-medium">
                Ir al inicio
              </button>
            </Link>

            <Link href="/orders">
              <span className="w-full py-4 text-green-800 flex items-center justify-center text-lg font-medium">
                Ir a mis pedidos
              </span>
            </Link>
          </div>
        </>
  
      {showDrawer && (
        <FeedbackDrawer
          open={showDrawer}
          onOpenChange={setShowDrawer}
          onSubmit={() => setShowForm(true)}
        />
      )}
    </div>
  );
}

