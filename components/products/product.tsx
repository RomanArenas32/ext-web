'use client'

import React, { useState } from 'react'
import { Header } from '../common/header'
import { Confirmation } from './confirmProduct'
import FromDrawer from "../ui/form-drawer"
import { Separator } from '../ui/separator'
import { Product } from '@/interfaces/product'
import { QuantitySelector } from '../common/quantity-selection'
import ProductDetail from './productDetail'
import Image from 'next/image'

interface ProductViewProps {
  product: Product;
}

type Color = "Gris" | "Amarillo" | "Verde";

const ProductView: React.FC<ProductViewProps> = ({ product }: ProductViewProps) => {
  const [isModalOpenGetProduct, setIsModalOpenGetProduct] = useState(false)
  const [isModalOpenDetailProduct, setIsModalOpenDetailProduct] = useState(false)

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
    return quantity * (product?.price || 3.40)
  }

  return (
    <div className="max-w-md bg-white min-h-screen mb-10">
      <Header
        text={`${product?.name || "Polo"}`}
        link="/products"
        button={{
          text: "Ver detalles",
          className: " text-[#B0B0B0] border border-[#B0B0B0] rounded-3xl  bg-white",
          action: () => setIsModalOpenDetailProduct(true)
        }}
      />
      <Separator />

      <div className="px-4 py-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Precio por mayor</span>
            <span className="text-sm font-medium">S/ {product?.price || "3.40"}</span>
          </div>
          <span className="text-gray-500 text-xs">00:27s</span>
        </div>

        <div className="space-y-4 flex items-center gap-4">
          <h3 className="text-base font-medium">Color</h3>
          <div className="flex gap-6">
            <Image
              src={colorImageMap[selectedColor]}
              alt={`Producto ${selectedColor}`}
              width={112}
              height={112}
              className="h-28 w-28 object-cover rounded-lg"
            />
            <div className="flex flex-row gap-3 items-center">
              <button
                className={`h-10 w-10 rounded-full border-2 ${selectedColor === 'Gris' ? 'border-green-800' : 'border-gray-200'} bg-gray-100`}
                onClick={() => handleColorSelect('Gris')}
              />
              <button
                className={`h-10 w-10 rounded-full border-2 ${selectedColor === 'Amarillo' ? 'border-green-800' : 'border-gray-200'} bg-yellow-200`}
                onClick={() => handleColorSelect('Amarillo')}
              />
              <button
                className={`h-10 w-10 rounded-full border-2 ${selectedColor === 'Verde' ? 'border-green-800' : 'border-gray-200'} bg-green-200`}
                onClick={() => handleColorSelect('Verde')}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 flex items-center gap-4">
          <h3 className="text-base font-medium">Talla</h3>
          <div className="flex gap-3">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`w-12 h-12 rounded-full border text-sm font-medium transition-colors
                  ${selectedSize === size
                    ? 'border-green-800 bg-green-800 text-white'
                    : 'border-gray-300 text-gray-700'
                  }`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-medium">Cantidad</h3>
          <QuantitySelector
            initialQuantity={quantity}
            minQuantity={3}
            onChange={setQuantity}
          />
          <div className="space-y-1">
            <p className="text-xs text-gray-500">Min. 3 UN</p>
            <p className="text-xs text-green-600">Disponible: 1,390.84 PEN</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center py-4 border-t border-b">
            <span className="text-base font-medium">Total</span>
            <span className="text-xl font-medium">S/ {calculateTotalPrice().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Tiempo entrega</span>
            <span className="text-sm font-medium">4 a 24 hrs</span>
          </div>
        </div>

        <div className="space-y-4 pb-[60px]">
          <p className="text-xs text-gray-500">
            By proceeding, you've read and agreed to the{' '}
            <a href="#" className="text-green-800 underline">
              Wanya Emprende ya legal disclaimer
            </a>
            .
          </p>
          <div className='w-full flex justify-center'>
            <button
              onClick={() => setIsModalOpenGetProduct(true)}
              className="w-[280px] bg-[#1A4B3D] text-white rounded-full py-4 font-medium h-[52px] flex justify-center items-center"
            >
              Lo quiero ya!
            </button>
          </div>

        </div>
      </div>

      <FromDrawer
        isOpen={isModalOpenDetailProduct}
        onOpenChange={(open) => setIsModalOpenDetailProduct(open)}
        trigger={undefined}
      >
        <ProductDetail
          productDetails={product}
        />
      </FromDrawer>

      <FromDrawer
        isOpen={isModalOpenGetProduct}
        onOpenChange={(open) => setIsModalOpenGetProduct(open)}
        trigger={undefined}
      >
        <Confirmation
          productDetails={{
            marketName: product.seller,
            _id: product._id,
            name: product.name,
            color: selectedColor,
            size: selectedSize,
            quantity: quantity,
            totalPrice: calculateTotalPrice()
          }}
        />
      </FromDrawer>
    </div>
  )
}

export default ProductView

