'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import ProductList from './productsList'
import { useEffect, useState } from 'react'
import { getProducts } from '@/actions/products'
import { Search } from "lucide-react"
import { Input } from "../ui/input"



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
  },
  {
    id: 5,
    name: "Polo",
    img: "icon/111.svg"
  },
  {
    id: 6,
    name: "Short",
    img: "icon/2222.svg"
  },
  {
    id: 7,
    name: "Vestidos",
    img: "icon/3333.svg"
  },
  {
    id: 8,
    name: "Zapatillas",
    img: "icon/444.svg"
  },
  {
    id: 9,
    name: "Vestidos",
    img: "icon/3333.svg"
  },
  {
    id: 10,
    name: "Zapatillas",
    img: "icon/444.svg"
  }
]

export default function ProductCategories() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts()
        setAllProducts(response.products)
        setFilteredProducts(response.products)
      } catch (error) {
        console.log('Error obtaining products')
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredProducts(filtered)
  }, [searchTerm, allProducts])

  interface Product {
    id: number;
    name: string;
    img: string;
  }

  interface ProductsResponse {
    products: Product[];
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full flex max-w-4xl items-center justify-center">
          <CarouselContent className="-ml-2">
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
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="w-full items-center justify-center flex">
          <Input
            placeholder="ej: Polos de algodón"
            className="w-[327px] h-10"
            icon={<Search size={16} />}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <ProductList products={filteredProducts} />
    </>
  )
}

