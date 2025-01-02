"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import Link from "next/link";
import { Service } from "./home";


export default function ServicesList({ services }: { services: Service[] }) {
  console.log(services)
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {services.map((service, index) => (
        <Card key={service._id} className="overflow-hidden">
          <div className="flex ml-4 gap-2 pt-4 flex-row">
            <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold">
              {service.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center justify-center gap-1">
                <h1 className="text-[20px] pt-[2px]">{service.name}</h1>
              </div>
            </div>
            <Image
              src="/icon/check.svg"
              alt="green check"
              width={22}
              height={22}
            />
            <Link href={`/products/${service._id}`}>
              <Button className="bg-green-500 hover:bg-green-600 ml-auto text-white">
                Ver más
              </Button>
            </Link>
          </div>
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={service.img || "/icon/camion1.svg"}
                  alt={`${service.name} image`}
                  width={100}
                  height={92}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 pt-4">
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Pasajeros: </span>
                  {/*
                                    <span className="font-medium">{product.} personas</span>

                  */}
                </div>
                <div className="flex flex-row gap-2">unidades
                  <span className="text-muted-foreground">Disponibilidad: </span>
                  <span className="font-medium">2 días</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Ventas:</span>
                  <span className="font-medium">{service.__v}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="text-muted-foreground">Rating:</span>
                  <span className="font-medium">98%</span>
                  <CheckCircle className="text-green-500 w-5 h-5" />
                </div>
              </div>
              <div className="pt-[30px] flex-col">
                <div className="text-[20px] font-bold flex items-baseline pt-[20px] gap-x-1">
                  <span className="text-[18px] text-black text-muted-foreground">
                    S/
                  </span>
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

