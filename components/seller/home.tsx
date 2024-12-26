'use client'

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Mock data for sellers
const sellers = [
  {
    id: 1,
    name: "GirosFaynad",
    verified: true,
    transactions: 100,
    completion: 100,
    rate: 3.768,
    available: 108.13,
    orderLimit: "50-407.43",
    paymentMethods: ["Credit Bank of Peru", "INTERBANK", "Yape", "Plin"]
  },
  {
    id: 2,
    name: "GirosFaynad",
    verified: true,
    transactions: 100,
    completion: 100,
    rate: 3.759,
    available: 108.13,
    orderLimit: "50-407.43",
    paymentMethods: ["Skrill", "Revolut"]
  },
  {
    id: 3,
    name: "GirosFaynad",
    verified: true,
    transactions: 100,
    completion: 100,
    rate: 3.742,
    available: 108.13,
    orderLimit: "50-407.43",
    paymentMethods: ["Credit Bank of Peru", "INTERBANK"]
  }
]

export function SellerHome() {
  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      {sellers.map((seller) => (
        <Card key={seller.id} className="p-4">
          <div className="space-y-4">
            {/* Header with name and verification */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                M
              </div>
              <span className="text-lg font-medium">{seller.name}</span>
              {seller.verified && (
                <Check className="w-5 h-5 text-emerald-500" />
              )}
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span>{seller.transactions} transactiones</span>
              <span>{seller.completion}% completion</span>
              <span>{seller.completion}%</span>
            </div>

            {/* Rate */}
            <div className="flex items-baseline gap-1">
              <span className="text-sm">S/</span>
              <span className="text-3xl font-bold">{seller.rate}</span>
              <span className="text-sm text-gray-600">/USDT</span>
            </div>

            {/* Available and Order limit */}
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-600">Available</span>
                <span>{seller.available} USDT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order limit</span>
                <span>{seller.orderLimit} PEN</span>
              </div>
            </div>

            {/* Payment methods */}
            <div className="flex flex-wrap gap-2">
              {seller.paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {method}
                </span>
              ))}
            </div>

            {/* Sell button */}
            <div className="flex justify-end">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white px-8"
              >
                Sell
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

