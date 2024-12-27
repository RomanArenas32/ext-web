"use client";

import React from 'react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChevronLeft } from "lucide-react";



const ProductView = () => {
  return (
    <div className="max-w-md mx-auto rounded-b-2xl space-y-6 pt-40">
      <div className="bg-green-800 text-white rounded-t-2xl p-6 flex items-center justify-between relative">
          <button className="absolute left-4">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold pl-[130px]">Producto</h1>
        <button className="px-4 py-1 border rounded-full text-sm">Ver detalle</button>
        </div>

      {/* Precio */}
      <div className="flex flex-row pl-4 gap-x-4 items-center text-sm -pt-[4px]">
        <span className="text-muted-foreground">Precio por mayor</span>
        <span className="font-semibold">S/ 3.40</span>
      <div className="text-xs text-muted-foreground text-right">00:27s</div>
      </div>

      {/* Producto Imagen y Opciones de Color */}
      <div className="space-y-2 flex mx-10 gap-x-20 flex-row">
        <div className="flex justify-center">
          <img
            src="/img/camisero.jpg"
            alt="Producto"
            className="h-24 w-24 object-cover"
          />
        </div>
        <div className="flex pl-10 justify-center pt-4 gap-4">
            {/* <span className="text-20 text-bold">Color</span> */}
          <button className="h-10 w-10 rounded-full border-2 border-gray-500 bg-white"></button>
          <button className="h-10 w-10 rounded-full border bg-yellow-400"></button>
          <button className="h-10 w-10 rounded-full border bg-green-400"></button>
        </div>
      </div>

      {/* Talla */}
      <div className="space-y-4 ml-4">
        <span className="text-sm font-semibold">Talla</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 border rounded-full">S</button>
          <button className="px-4 py-2 border rounded-full">M</button>
          <button className="px-4 py-2 border rounded-full">L</button>
          <button className="px-4 py-2 border rounded-full">XL</button>
        </div>
      </div>

      {/* Cantidad */}
      <div className="space-y-4 ml-4">
        <div className="flex items-center justify-between mr-4">
          <span className="text-sm font-semibold">Cantidad</span>
          <span className="text-lg font-bold">56 UN</span>
        </div>
        <div className="text-xs text-muted-foreground">Min 3 UN</div>
        <div className="text-xs text-green-600 font-medium">Disponible: 1,390.84 PEN</div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center py-4 mx-4 border-t border-b">
        <span className="text-sm font-semibold">Total</span>
        <span className="text-lg font-bold">S/ 190.05</span>
      </div>

      {/* Tiempo de entrega */}
      <div className="flex justify-between items-center mx-4 text-sm">
        <span className="text-muted-foreground">Tiempo entrega</span>
        <span className="font-medium">4 a 24 hrs</span>
      </div>

      {/* Disclaimer */}
      <div className="text-xs mx-4 text-muted-foreground">
        By proceeding, you've read and agreed to the
        <a href="#" className="text-green-600 underline"> Wanya Emprende ya legal disclaimer.</a>
      </div>

      {/* Botón */}
      <div className="text-center pb-4">
        <button className="px-6 py-3 bg-green-600 pb-2 text-white font-semibold rounded-full hover:bg-green-700">
          Lo quiero ya!
        </button>
      </div>
    </div>
  );
};

export default ProductView;

