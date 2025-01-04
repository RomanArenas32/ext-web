"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Service } from "./home";
import { Separator } from "../ui/separator";


export default function ServicesList({ services }: { services: Service[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-4 p-4">
      {services.map((service) => (
        <div key={service._id} className="overflow-hidden flex flex-col">
          <div className="flex flex-row justify-between items-center p-2">
            <div className="flex flex-row gap-3 justify-start items-center">
              <div className="h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center text-[14px] font-bold">
                {service.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center justify-center gap-1">
                  <h1 className="text-[14px] pt-[2px]">{service.name}</h1>
                </div>
              </div>
              <Image
                src="/icon/check.svg"
                alt="green check"
                width={22}
                height={22}
              />
            </div>
            <div className="flex flex-row gap-2 justify-start w-auto">
              <div className="flex flex-row gap-2">
                <span className="text-[#4F4F4F] text-[10px]">Ventas:</span>
                <span className="font-semibold text-[#0B231D] text-[10px]">17</span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-[#4F4F4F] text-[10px]">Rating:</span>
                <span className="font-semibold text-[#0B231D] text-[10px]">98%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center gap-3 p-2">
            <div className="flex-shrink-0">
              <Image
                src="/icon/camion1.svg"
                alt="camion image"
                width={100}
                height={92}
                className="w-[79px] h-[92px] rounded-lg object-cover"
              />
            </div>


            <div className="flex-1 min-w-0 pt-4">
            <div className="flex flex-row gap-2 justify-start items-center">
                <span className=" text-[12px] font-semibold">S/ </span>
                <span className="font-semibold  text-[24px]">{service.price}</span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-[#4F4F4F] text-[10px]">Pasajeros:</span>
                <span className="font-semibold text-[#0B231D] text-[10px]">8 personas</span>
              </div>
              <div className="flex flex-row gap-2">
                <span className="text-[#4F4F4F] text-[10px]">Disponibilidad: </span>
                <span className="font-semibold text-[#0B231D] text-[10px]">2 días</span>
              </div>

            </div>

            <Link href={`/products/${service._id}`}>
              <Button className="bg-[#16C784] w-[98px] h-[28px] rounded-3xl hover:bg-green-600 text-[14px] text-white flex justify-center">
                Ver más
              </Button>
            </Link>
          </div>

          <Separator />
        </div>

      ))}
    </div>
  );
}

