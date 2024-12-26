"use client"

import NavigationFooter from "@/components/common/panelFooter"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import { useState } from "react"

export enum Order {
    all = "all",
    completed = "completed",
    pending = "pending"
}

export default function Page() {
    const [order, setOrder] = useState<Order>(Order.all)

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
                LISTA DE ORDENES
            </div>

            <NavigationFooter />
        </div>

    )
}

