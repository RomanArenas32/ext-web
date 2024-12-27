"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

interface Product {
  storeName: string;
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

    sales: 72,
    rating: 76.0,
    price: 3.4,
    stock: 40,
    deliveryTime: "24hrs",
    productImage: "/img/camisero.jpg",
  },
  {
    storeName: "Mc-Store",
    sales: 115,
    rating: 98.0,
    price: 3.8,
    stock: 90,
    deliveryTime: "24hrs",
    productImage: "/img/camisero.jpg",
  },
  {
    storeName: "MerxClothing",

    sales: 330,
    rating: 92.0,
    price: 4.2,
    stock: 240,
    deliveryTime: "24hrs",
    productImage: "/img/camisero.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {products.map((product, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-2">
              <div className="flex-shrink-0">
                <Image
                  src={product.productImage}
                  alt={`${product.storeName} product`}
                  width={120}
                  height={120}
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="flex-1 min-w-0 pt-4">
                <div className="flex flex-row gap-4">
                  <span className="font-semibold text-lg">
                    {product.storeName}
                  </span>
                </div>

                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Envío: </span>
                  <span className="font-medium">{product.deliveryTime}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Stock: </span>
                  <span className="font-medium">{product.stock} uni</span>
                </div>

                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Ventas</span>
                  <span className="font-medium">{product.sales}</span>
                </div>

                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium">{product.rating}%</span>
                  <CheckCircle className="text-green-500 w-5 h-5" />
                </div>
              </div>

              <div className="pt-[30px] flex-col">
                <Link href="/products"> 
                <Button className="bg-green-500 hover:bg-green-600 text-white">
                  Ver más
                </Button>
                </Link>
                <div className="text-3xl font-bold flex items-baseline pt-[20px] gap-x-1">
                  <span className="text-[22px] text-black text-muted-foreground">
                    S/
                  </span>
                  <span>{product.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
