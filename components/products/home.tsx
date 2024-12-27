'use client'

import { Shirt, SubscriptIcon as Shorts, SaladIcon as Dress, HardDriveIcon as Boot, Search } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { Input } from '../ui/input'
import ProductList from './productsList'

const categories = [
  {
    id: 1,
    name: "Polo",
    img: "icon/111.svg"
  },
  {
    id: 2,
    name: "Short",
    img: "icon/2222.svg"
  },
  {
    id: 3,
    name: "Vestidos",
    img: "icon/3333.svg"
  },
  {
    id: 4,
    name: "Zapatillas",
    img: "icon/444.svg"
  }
]

export default function ProductCategories() {
  return (
    <>
    <Carousel className="w-full flex max-w-4xl items-center justify-center">
      <CarouselContent className="-ml-2 md:-ml-4">
        {categories.map((category, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white rounded-full p-4 shadow-sm relative w-20 h-20 flex items-center justify-center">
                <Image
                  src={category.img}
                  alt={category.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 text-[#86efac]"
                />
              </div>
              <span className="text-sm font-medium text-gray-900">{category.name}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-12" />
      <CarouselNext className="-right-12" />
    </Carousel>
    <div className='flex justify-center w-full'>
      <Input placeholder="Buscar productos" className="w-full mt-4 max-w-[362px]"/>
    </div>
    <ProductList />
    </>
    
  )
}

