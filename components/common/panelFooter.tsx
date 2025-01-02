import { Users2, ScrollText, MessageSquare, User } from 'lucide-react'
import { CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from 'next/image'

export default function NavigationFooter() {
  return (

    <CardFooter className=" gap-2 p-4 mt-4 border-t bg-[#F7F7F7] rounded-3xl mb-6 mx-auto w-[90%] h-[64px] flex flex-row items-center justify-around">
     
     <Link 
        href="/products"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
       <Image
                  src="/icon/comprar.svg"
                  alt="comprar icon"
                  width={24}
                  height={24}
                />
        <span className="text-xs">Comprar</span>
      </Link>
      <Link 
        href="/sell"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Image
                  src="/icon/vender.svg"
                  alt="vender icon"
                  width={24}
                  height={24}
                />
        <span className="text-xs">Vender</span>
      </Link>
      
      <Link 
        href="/orders"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Image
                  src="/icon/ordenes.svg"
                  alt="ordenes icon"
                  width={24}
                  height={24}
                />
        <span className="text-xs">Ordenes</span>
      </Link>
      <Link 
        href="/chats"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Image
                  src="/icon/chats.svg"
                  alt="chats icon"
                  width={24}
                  height={24}
                />
        <span className="text-xs">Chats</span>
      </Link>
      
    </CardFooter>
  )
}

