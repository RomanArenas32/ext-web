"use client";

import React, { useEffect, useState } from 'react';
import { ChevronLeft } from "lucide-react";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductById } from '@/actions/products';
import { Product } from '@/components/products/productsList';



export default function Page() {

  const params = useParams();
  const _id = params.id as string;
  const [product, setProduct] = useState<Product>();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(_id);
        setProduct(response.product);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, []);
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <div className="bg-white text-black border-b py-4 px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
        <Link href='/products'>
          <ChevronLeft className="text-black w-6 h-6" />
        </Link>
        <h1 className="text-base font-medium">Producto</h1>
        <button className="px-4 py-1 border rounded-full text-sm text-black">Ver detalle</button>
      </div>
      <div className="pt-20 px-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Precio por mayor</span>
          <span>S/ {product?.precio || "3.40"}</span>
          <span className="text-gray-500 ml-auto text-xs">00:27s</span>
        </div>
      </div>
      <div className="mt-8 px-6">
        <span className="text-sm font-medium">Color</span>
        <div className="flex mt-4 gap-4">
          <div className="relative">
            <img
              src="/img/camisero.jpg"
              alt="Producto"
              className="h-24 w-24 object-cover"
            />

          </div>
          <div className="flex items-center gap-3">
            <button className="h-10 w-10 rounded-full border-2 border-gray-300 bg-white"></button>
            <button className="h-10 w-10 rounded-full border border-gray-300 bg-yellow-300"></button>
            <button className="h-10 w-10 rounded-full border border-gray-300 bg-green-300"></button>
          </div>
        </div>
      </div>
      <div className="mt-8 px-6">
        <span className="text-sm font-medium">Talla</span>
        <div className="flex gap-3 mt-4">
          <button className="w-12 h-12 rounded-full border-2 border-green-800 bg-green-800 text-white">S</button>
          <button className="w-12 h-12 rounded-full border border-gray-300">M</button>
          <button className="w-12 h-12 rounded-full border border-gray-300">L</button>
          <button className="w-12 h-12 rounded-full border border-gray-300">XL</button>
        </div>
      </div>
      <div className="mt-8 px-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Cantidad</span>
          <span className="text-3xl font-medium">{product?.unidades || "56"} UN</span>
        </div>
        <div className="text-xs text-gray-500 mt-2">Min. 3 UN</div>
        <div className="text-xs text-green-600 mt-1">Disponible: 1,390.84 PEN</div>
      </div>
      <div className="mt-8 px-6">
        <div className="flex justify-between items-center py-4 border-t border-b">
          <span className="text-sm font-medium">Total</span>
          <span className="text-xl font-medium">S/ 190.05</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600">Tiempo entrega</span>
          <span className="text-sm">4 a 24 hrs</span>
        </div>
      </div>
      <div className="px-6 mt-8">
        <p className="text-xs text-gray-500">
          By proceeding, you've read and agreed to the{' '}
          <a href="#" className="text-green-600 underline">Wanya Emprende ya legal disclaimer</a>.
        </p>
        <Link href="/confirmacion">
          <button className="w-full bg-green-800 text-white rounded-full py-4 mt-6 mb-8 font-medium">
            Lo quiero ya!
          </button>
        </Link>

      </div>
    </div>
  );
};