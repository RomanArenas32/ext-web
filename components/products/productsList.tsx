"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export interface Product {
  _id: string;          
  __v: number;          
  color: string;       
  descripcion: string;   
  img: string;           
  nombre: string;         
  precio: number;     
  unidades: number;      
}



export default function ProductList({ products }: { products: Product[] }) {

  console.log(products)
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {products.map((product, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0">
                <Image
                  src="/img/camisero.jpg"
                  alt={`${product.nombre} product`}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 pt-4">
                <div className="flex flex-row gap-4">
                  <span className="font-semibold text-lg">
                    {product.nombre}
                  </span>
                </div>

                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Envío: </span>
                 
                   <span className="font-medium">25 hs</span>
              
                 
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Stock: </span>
                  <span className="font-medium">{product.unidades} uni</span>
                </div>

                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Ventas</span>
                  <span className="font-medium">{product.precio.toFixed(0)}</span>
                </div>

                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium">100%</span>
                  <CheckCircle className="text-green-500 w-5 h-5" />
                </div>
              </div>

              <div className="pt-[30px] flex-col">
                <Link href={`/products/${product._id}`}> 
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Ver más
                </Button>
                </Link>
                <div className="text-3xl font-bold flex items-baseline pt-[20px] gap-x-1">
                  <span className="text-[22px] text-black text-muted-foreground">
                    S/
                  </span>
                  <span>{product.precio.toFixed(0)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
