import { Users2, ScrollText, Megaphone, MessageSquare, User } from 'lucide-react'
import { CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function NavigationFooter() {
  return (
    <CardFooter className="gap-2 p-6 border-t bg-[#F7F7F7] rounded-3xl mb-[66px] w-[80%] mx-auto h-[64px] flex flex-row items-center justify-between">
      <Link 
        href="/p2p"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Users2 className="h-6 w-6" />
        <span className="text-xs">P2P</span>
      </Link>
      
      <Link 
        href="/orders"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ScrollText className="h-6 w-6" />
        <span className="text-xs">Orders</span>
      </Link>
      
      <Link 
        href="/ads"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Megaphone className="h-6 w-6" />
        <span className="text-xs">Ads</span>
      </Link>
      
      <Link 
        href="/chats"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
        <span className="text-xs">Chats</span>
      </Link>
      
      <Link 
        href="/profile"
        className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <User className="h-6 w-6" />
        <span className="text-xs">Profile</span>
      </Link>
    </CardFooter>
  )
}

