'use client'

import React, { useState } from 'react'
import { Header } from '../common/header'
import { useRouter } from 'next/navigation'
import { Confirmation } from './confirmProduct'
import FromDrawer from "../ui/form-drawer" 

interface Product {
  _id: string;
  precio: number;
  // Add other product properties as needed
}

interface ProductViewProps {
  product: Product;
}

const ProductView: React.FC<ProductViewProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('Gris')
  const [selectedSize, setSelectedSize] = useState('S')
  const [quantity, setQuantity] = useState(58)
  const router = useRouter()

  const headerButtonProps = {
    onClick: () => router.push(`/products/details/${product._id}`),
    className: "border border-[#B0B0B0] rounded-2xl bg-white text-[#B0B0B0] text-[12px]",
    children: "Ver detalles",
  }

  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size)
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity)
  }

  const calculateTotalPrice = () => {
    return quantity * (product?.precio || 3.40)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen rounded-2xl overflow-hidden">
      <Header text="Producto" link="/products" button={headerButtonProps} />
      <div className="pt-8 px-6">
        <div className="flex items-center gap-2 font-bold text-sm">
          <span className="text-gray-600">Precio por mayor</span>
          <span>S/ {product?.precio || "3.40"}</span>
          <span className="text-gray-500 ml-auto text-xs">00:27s</span>
        </div>
      </div>
      <div className="mt-8 px-6">
        <span className="text-sm font-bold">Color</span>
        <div className="flex mt-4 ml-10 gap-10">
          <div className="relative">
            <img
              src="/img/camisero.jpg"
              alt="Producto"
              className="h-24 w-24 object-cover"
            />
          </div>
          <div className="flex items-center gap-3">
            <button 
              className={`h-10 w-10 rounded-full border-2 ${selectedColor === 'Gris' ? 'border-black' : 'border-gray-300'} bg-gray-500`}
              onClick={() => handleColorSelect('Gris')}
            ></button>
            <button 
              className={`h-10 w-10 rounded-full border-2 ${selectedColor === 'Amarillo' ? 'border-black' : 'border-gray-300'} bg-yellow-300`}
              onClick={() => handleColorSelect('Amarillo')}
            ></button>
            <button 
              className={`h-10 w-10 rounded-full border-2 ${selectedColor === 'Verde' ? 'border-black' : 'border-gray-300'} bg-green-300`}
              onClick={() => handleColorSelect('Verde')}
            ></button>
          </div>
        </div>
      </div>
      <div className="mt-8 px-6">
        <span className="text-sm font-bold">Talla</span>
        <div className="flex gap-3 mt-4">
          <button 
            className={`w-12 h-12 rounded-full border-2 ${selectedSize === 'S' ? 'border-green-800 bg-green-800 text-white' : 'border-gray-300'}`}
            onClick={() => handleSizeSelect('S')}
          >
            S
          </button>
          <button 
            className={`w-12 h-12 rounded-full border-2 ${selectedSize === 'M' ? 'border-green-800 bg-green-800 text-white' : 'border-gray-300'}`}
            onClick={() => handleSizeSelect('M')}
          >
            M
          </button>
          <button 
            className={`w-12 h-12 rounded-full border-2 ${selectedSize === 'L' ? 'border-green-800 bg-green-800 text-white' : 'border-gray-300'}`}
            onClick={() => handleSizeSelect('L')}
          >
            L
          </button>
          <button 
            className={`w-12 h-12 rounded-full border-2 ${selectedSize === 'XL' ? 'border-green-800 bg-green-800 text-white' : 'border-gray-300'}`}
            onClick={() => handleSizeSelect('XL')}
          >
            XL
          </button>
        </div>
      </div>
      <div className="mt-8 px-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold">Cantidad</span>
          <span className="text-3xl font-bold">{quantity} uni</span>
        </div>
        <div className="text-xs font-bold text-gray-500 mt-2">Min. 3 uni</div>
        <div className="text-xs font-bold  text-green-600 mt-1">Disponible: 1,390.84 PEN</div>
      </div>
      <div className="mt-8 px-6">
        <div className="flex justify-between items-center py-4 border-t border-b">
          <span className="text-sm font-bold">Total</span>
          <span className="text-xl font-bold">S/. {calculateTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm font-bold text-gray-600">Tiempo entrega</span>
          <span className="text-sm font-bold">4 a 12 hrs</span>
        </div>
      </div>
      <div className="px-6 mt-8">
        <p className="text-xs text-gray-500">
          By proceeding, you've read and agreed to the{' '}
          <a href="#" className="text-green-600 underline">Wanya Emprende ya legal disclaimer</a>.
        </p>
        <button 
          className="w-[80%] flex justify-center items-center bg-green-800 text-white rounded-full py-4 mt-6 mx-8 mb-8 font-bold"
          onClick={openModal}
        >
          Lo quiero ya!
        </button>
      </div>
      <FromDrawer 
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        header="Confirmación" trigger={undefined}>
        <Confirmation
          productDetails={{
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

