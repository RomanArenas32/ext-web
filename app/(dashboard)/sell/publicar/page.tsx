"use client";


import React from 'react';
import { Camera, X } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Publicar aviso</h2>
        <Link href={"/sell"}>
          <button className="text-muted-foreground">
          <X className="w-5 h-5" />
        </button>
        </Link>
      
      </div>

      {/* Agregar fotos */}
      <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg h-32">
        <Camera className="w-8 h-8 text-gray-400" />
        <button className="text-sm text-gray-500">Agregar fotos</button>
      </div>

      {/* Formulario */}
      <form className="space-y-4">
        {/* Nombre del producto */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre producto</label>
          <input
            type="text"
            placeholder="Producto o Servicio"
            className="w-full mt-1 px-4 py-2 border rounded-lg text-sm text-gray-900 focus:ring focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Precio */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Precio</label>
          <input
            type="text"
            placeholder="S/ 0.00"
            className="w-full mt-1 px-4 py-2 border rounded-lg text-sm text-gray-900 focus:ring focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Categoría */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <select
            className="w-full mt-1 px-2 py-2 border rounded-lg text-sm text-gray-900 focus:ring focus:ring-green-500 focus:outline-none"
          >
            <option value="camisas">Camisas</option>
            <option value="pantalones">Pantalones</option>
            <option value="zapatos">Zapatos</option>
          </select>
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            placeholder="Describe tu producto"
            className="w-full mt-1 px-2 py-2 border rounded-lg text-sm text-gray-900 focus:ring focus:ring-green-500 focus:outline-none"
          ></textarea>
        </div>

        {/* Unidades máximas */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Unidades máximas</label>
          <input
            type="text"
            placeholder="200 UN"
            className="w-full mt-1 px-2 py-2 border rounded-lg text-sm text-gray-900 focus:ring focus:ring-green-500 focus:outline-none"
          />
        </div>

        {/* Colores disponibles */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Colores disponibles</label>
          <select
            className="w-full mt-1 px-2 py-2 border rounded-lg text-sm text-gray-900 focus:ring focus:ring-green-500 focus:outline-none"
          >
            <option value="blanco">Blanco</option>
            <option value="negro">Negro</option>
            <option value="azul">Azul</option>
          </select>
        </div>

        {/* Botón Publicar */}
        <div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-300 text-white font-semibold rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
            disabled
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};


