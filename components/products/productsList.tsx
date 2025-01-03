'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Separator } from "../ui/separator"
import { Product } from "@/interfaces/product"



export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {products.map((product, index) => (
        <div key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold">
                K
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-medium">KellyFashion</h1>
                <Image
                  src="/icon/check.svg"
                  alt="Verified seller"
                  width={16}
                  height={16}
                  className="mt-0.5"
                />
                <span className="text-muted-foreground text-sm">130 ventas</span>
                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground text-sm">100.00%</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-24 h-24">
                <Image
                  src={"/img/pologris.jpg"}
                  alt={product.name}
                  width={96}
                  height={96}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-muted-foreground text-sm">s/</span>
                      <span className="text-2xl font-bold">{product.price}</span>
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex gap-2">
                        <span className="text-muted-foreground text-sm">Stock:</span>
                        <span className="text-sm">{product.unities} UN</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-muted-foreground text-sm">Envío:</span>
                        <span className="text-sm">24hrs</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/products/${product._id}`}>
                    <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
         <Separator />
        </div> 
      ))}
    </div>
  )
}

