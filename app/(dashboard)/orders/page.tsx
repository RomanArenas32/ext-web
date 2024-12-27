import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import OrdersView from "@/components/sell/ordenes"
import Link from "next/link"



export default function Page() {

    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-green-800 text-white p-6 flex items-center justify-between relative">
                <Link href="/">
                    <button className="absolute left-4">
                        <ChevronLeft className="text-white w-6 h-6" />
                    </button>
                </Link>

                <h1 className="text-lg font-bold pl-[160px]">Orders</h1>
            </div>

            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <OrdersView />
            </div>
        </div>

    )
}

