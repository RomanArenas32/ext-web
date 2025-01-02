"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {products.map((product, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="flex ml-4 gap-2 pt-4 flex-row">
            <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold">
              K
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <h1 className="text-[20px] pt-[2px]">KellyFashion</h1>
              </div>
            </div>
            <Image
              src="/icon/check.svg"
              alt="green check"
              width={22}
              height={22}
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0">
                <Image
                  src="/img/pologris.jpg"
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
                  <span className="text-muted-foreground">Ventas:</span>
                  <span className="font-medium">{product.precio}28</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium">100%</span>
                </div>
              </div>
              <div className="pt-[30px] flex-col place-items-end">
                <Link href={`/products/${product._id}`}>
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Ver más
                  </Button>
                </Link>
                <div className="text-[20px] font-bold flex items-baseline pt-[20px] gap-x-1">
                  <span className="text-[16px] text-black text-muted-foreground">
                    S/
                  </span>
                  <span className="text-[24px]">{product.precio}.00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
