"use client";

import React, { useEffect, useState } from 'react';
import { ChevronLeft } from "lucide-react";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductById } from '@/actions/products';
import { Product } from '@/components/products/productsList';
import { Header } from '@/components/common/header';
import { Separator } from '@radix-ui/react-select';

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
    <div className="max-w-md mx-auto bg-white min-h-screen rounded-2xl overflow-hidden">
       <Header text={'Detalle de producto'} link={`/products/${product?._id}`} />
       <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <Separator/>
        {/* Imagen principal */}
        <div className="relative flex">
          <img
            src="/img/pologris.jpg"
            alt="Polo gris"
            className="h-64 w-full object-contain"
          />
            </div>
          <img
            src="/img/detalle/flechas.svg"
            alt="arrows"
            className="absolute top-1/2 right-12 transform -translate-y-1/2 h-10 w-10 object-contain cursor-pointer"
          />

        {/* Galería de imágenes */}
        <div className="flex justify-center gap-4 mt-4">
          <img
            src="/img/detalle/vista1.jpg" // Cambia esta ruta a la imagen de la galería
            alt="Vista 1"
            className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
          />
          <img
            src="/img/detalle/vista2.jpg" // Cambia esta ruta a la imagen de la galería
            alt="Vista 2"
            className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
          />
          <img
            src="/img/detalle/vista3.jpg" // Cambia esta ruta a la imagen de la galería
            alt="Vista 3"
            className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
          />
          <img
            src="/img/detalle/vista4.jpg" // Cambia esta ruta a la imagen 360
            alt="Vista 360"
            className="h-20 w-20 object-cover rounded-md cursor-pointer border border-gray-300 hover:border-gray-500"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 text-sm font-bold rounded-full bg-gray-200 text-gray-700">
            Descripción
          </button>
          <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700">
            Material
          </button>
          <button className="px-4 py-2 text-sm font-bold text-gray-500 hover:text-gray-700">
            Reviews
          </button>
        </div>

        {/* Descripción */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            Polos en blanco de polialgodón delgado, especiales para campaña
            política.
          </p>
          <p className="mt-2">
            Jersey 30/1 densidad 125 gr/m2. Tamaño ALTO 70cm ANCHO 55cm. La
            entrega no incluye doblado/embolsado.
          </p>
        </div>

        {/* Botón */}
        <div className="mt-6">
          <button className="w-[80%] py-3 bg-green-800 mx-auto items-center flex justify-center text-white font-semibold rounded-3xl shadow-md hover:bg-green-700">
            Me interesa
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};