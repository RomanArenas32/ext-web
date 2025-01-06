'use client'

import React, { useState } from 'react'
import { Header } from '../common/header'
import { Separator } from '../ui/separator'
import { QuantitySelector } from '../common/quantity-selection'
import { Service } from './home'
import Image from 'next/image'

interface ServiceiewProps {
  service: Service;
}

type Color = "Gris" | "Amarillo" | "Verde";

const ServiceView: React.FC<ServiceiewProps> = ({ service }: ServiceiewProps) => {

  const [selectedColor, setSelectedColor] = useState<Color>('Gris')
  const [selectedSize, setSelectedSize] = useState('S')
  const [quantity, setQuantity] = useState(3)

  const colorImageMap: Record<Color, string> = {
    Gris: "/img/pologris.jpg",
    Amarillo: "/img/poloama.jpg",
    Verde: "/img/polover.jpg",
  };

  const handleColorSelect = (color: Color) => {
    setSelectedColor(color)
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
  }

  const calculateTotalPrice = () => {
    return quantity * (service?.price || 3.40)
  }

  return (
    <div className="max-w-md bg-white min-h-screen mb-10">
     <Header 
        text="Servicio de transporte" 
        link="/products" 
      />
      <Separator />

      <div className="px-4 py-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Precio del servicio</span>
            <span className="text-sm font-medium">S/ {service?.price || "3.40"}</span>
          </div>
          <span className="text-gray-500 text-xs">00:27s</span>
        </div>

        <div className="space-y-4 flex items-center gap-4">
          <h3 className="text-base font-medium">Servicio</h3>
          <div className="flex gap-6">
            <Image
              src="/icon/camion1.svg"
              alt={`Servicio`}
              width={112}
              height={112}
              className="h-28 w-28 object-cover rounded-lg"
            />
           
          </div>
        </div>

    

       

        <div className="space-y-4">
          <div className="flex justify-between items-center py-4 border-t border-b">
            <span className="text-base font-medium">Precio</span>
            <span className="text-xl font-medium">S/ {calculateTotalPrice().toFixed(2)}</span>
          </div>
       
        </div>

        <div className="space-y-4">
          <p className="text-xs text-gray-500">
            By proceeding, you've read and agreed to the{' '}
            <a href="#" className="text-green-800 underline">
              Wanya Emprende ya legal disclaimer
            </a>
            .
          </p>
         
          </div>
          
        </div>
      </div>
  )
}

export default ServiceView

