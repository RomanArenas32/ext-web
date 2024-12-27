import { Users2, ScrollText, MessageSquare, User } from 'lucide-react'
import { CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function NavigationFooter() {
  return (

    <CardFooter className=" gap-2 p-4 border-t bg-[#F7F7F7] rounded-3xl my-2 mx-4 w-[375px] h-[64px] flex flex-row items-center justify-around">
     
     <Link 
        href="/"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <User className="h-6 w-6" />
        <span className="text-xs">Inicio</span>
      </Link>
      <Link 
        href="/sell"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Users2 className="h-6 w-6" />
        <span className="text-xs">Vender</span>
      </Link>
      
      <Link 
        href="/orders"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ScrollText className="h-6 w-6" />
        <span className="text-xs">Ordenes</span>
      </Link>
      <Link 
        href="/chats"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="text-xs">Chats</span>
      </Link>
      
    </CardFooter>
  )
}

