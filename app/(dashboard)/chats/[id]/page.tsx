'use client'

import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from 'lucide-react'
import Link from "next/link"
import ChatWithWarning from "@/components/chat/chatfinal"

export default function ChatPage() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="bg-green-800 text-white p-6 flex items-center justify-between relative">
        <Link href="/">
          <ChevronLeft className="text-white w-6 h-6" />
        </Link>
        <h1 className="text-lg font-bold">Chats</h1>
      </div>

      <Separator />
      
      <div className="p-4 pt-20">
        <ChatWithWarning />
      </div>
    </div>
  )
}

