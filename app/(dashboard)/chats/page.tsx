"use client"

import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"
import ChatList from "@/components/sell/chatea"
import ChatDetail from "@/components/sell/chatbox"

export default function Page() {

    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
             <div className="bg-green-800 text-white p-6 flex items-center justify-between relative">
          <button className="absolute left-4">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold pl-[160px]">Chats</h1>
        </div>

            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <ChatList/>
            </div>
            <div className="flex flex-row items-center gap-8 p-4 pt-20 justify-between">
                <ChatDetail/>
        </div>
        </div>

    )
}

