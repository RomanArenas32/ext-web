"use client"

import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export default function Page() {

    return (
        <div>
            <div className="h-[56px] flex items-center p-4">
                <div className="flex-1 items-start">
                    <ChevronLeft />

                </div>
                <h2 className="flex-1">Orders</h2>
            </div>

            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                CHATS
            </div>

        </div>

    )
}

