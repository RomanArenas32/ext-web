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

export default function ServiceList() {
  
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      
        <Card className="overflow-hidden">
         <div className="flex ml-4 gap-2 pt-4 flex-row">
          <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold">
            T
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <h1 className="text-[20px] pt-[2px]">TrasRubio</h1>
            </div>
          </div>
          <Image
                  src="/icon/check.svg"
                  alt="green check"
                  width={22}
                  height={22}
                />
                <Link href="">
                  <Button className="bg-green-500 hover:bg-green-600 ml-[106px] text-white">
                    Ver más
                  </Button>
                </Link>
        </div>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/icon/camion1.svg"
                  alt="camion image"
                  width={100}
                  height={92}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 pt-4">
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Pasajeros: </span>
                  <span className="font-medium">8 personas</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Disponibilidad: </span>
                  <span className="font-medium">2 días</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Ventas:</span>
                  <span className="font-medium">28</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Rating:</span>
                  <span className="font-medium">78%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
         <div className="flex ml-4 gap-2 pt-4 flex-row">
          <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold">
            Ch
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <h1 className="text-[20px] pt-[2px]">Toretto</h1>
            </div>
          </div>
          <Image
                  src="/icon/check.svg"
                  alt="green check"
                  width={22}
                  height={22}
                />
                <Link href="">
                  <Button className="bg-green-500 hover:bg-green-600 ml-[138px] text-white">
                    Ver más
                  </Button>
                </Link>
        </div>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/icon/camion2.svg"
                  alt="camion image"
                  width={100}
                  height={92}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 pt-4">
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Pasajeros: </span>
                  <span className="font-medium">6 personas</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Disponibilidad: </span>
                  <span className="font-medium">7 días</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Ventas:</span>
                  <span className="font-medium">13</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Rating:</span>
                  <span className="font-medium">98%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
         <div className="flex ml-4 gap-2 pt-4 flex-row">
          <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold">
            T
          </div>
          <div>
            <div className="flex items-center justify-center gap-1">
              <h1 className="text-[20px] pt-[2px]">El Chino</h1>
            </div>
          </div>
          <Image
                  src="/icon/check.svg"
                  alt="green check"
                  width={22}
                  height={22}
                />
                <Link href="">
                  <Button className="bg-green-500 hover:bg-green-600 ml-[122px] text-white">
                    Ver más
                  </Button>
                </Link>
        </div>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src="/icon/camion3.svg"
                  alt="camion image"
                  width={100}
                  height={92}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 pt-4">
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Pasajeros: </span>
                  <span className="font-medium">9 personas</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Disponibilidad: </span>
                  <span className="font-medium">5 días</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Ventas:</span>
                  <span className="font-medium">17</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Rating:</span>
                  <span className="font-medium">98%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>
    )
    }

  

