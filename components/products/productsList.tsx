'use client'

import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

interface Product {
  storeName: string;
  storeImage: string;
  sales: number;
  rating: number;
  price: number;
  stock: number;
  deliveryTime: string;
  productImage: string;
}

const products: Product[] = [
  {
    storeName: "KellyFashion",
    storeImage: "/placeholder.svg",
    sales: 130,
    rating: 100.00,
    price: 3.40,
    stock: 100,
    deliveryTime: "24hrs",
    productImage: "/placeholder.svg"
  },
  {
    storeName: "Mc Store",
    storeImage: "/placeholder.svg",
    sales: 130,
    rating: 100.00,
    price: 3.80,
    stock: 90,
    deliveryTime: "24hrs",
    productImage: "/placeholder.svg"
  },
  {
    storeName: "MerlinaClothing",
    storeImage: "/placeholder.svg",
    sales: 130,
    rating: 100.00,
    price: 4.20,
    stock: 100,
    deliveryTime: "24hrs",
    productImage: "/placeholder.svg"
  }
]

export default function ProductList() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {products.map((product, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={product.productImage}
                  alt={`${product.storeName} product`}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={product.storeImage}
                      alt={product.storeName}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{product.storeName}</h3>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{product.sales} ventas</span>
                    <span>{product.rating.toFixed(2)}%</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-2 mb-4">
                  <span className="text-sm text-muted-foreground">S/</span>
                  <span className="text-3xl font-bold">{product.price.toFixed(2)}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-muted-foreground">Stock: </span>
                    <span className="font-medium">{product.stock} UN</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Envío: </span>
                    <span className="font-medium">{product.deliveryTime}</span>
                  </div>
                </div>
              </div>

              <Button className="bg-green-500 hover:bg-green-600 text-white">
                Ver más
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

