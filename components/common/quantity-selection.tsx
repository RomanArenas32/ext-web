'use client'

import { Minus, Plus } from 'lucide-react'
import { useState } from "react"

interface QuantitySelectorProps {
  initialQuantity?: number
  minQuantity?: number
  maxQuantity?: number
  onChange: (quantity: number) => void
}

export function QuantitySelector({
  initialQuantity = 3,
  minQuantity = 3,
  maxQuantity = 1000,
  onChange
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= minQuantity && newQuantity <= maxQuantity) {
      setQuantity(newQuantity)
      onChange(newQuantity)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => handleQuantityChange(quantity - 1)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300"
        disabled={quantity <= minQuantity}
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="text-5xl font-medium tabular-nums">{quantity}</span>
      <span className="text-2xl text-gray-500">UN</span>
      <button
        onClick={() => handleQuantityChange(quantity + 1)}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300"
        disabled={quantity >= maxQuantity}
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  )
}

