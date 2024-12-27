
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import UserProfile from "@/components/sell/homecell"



export default function Page() {

    return (
        <div>
            <div className="bg-white w-full max-w-md pb-4 rounded-lg overflow-hidden shadow-lg">
            <div className="bg-green-800 text-white p-6 flex items-center justify-between relative">
          <button className="absolute left-4">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold pl-[150px]">Orders</h1>
        </div>
            </div>

            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                SELL
            </div>
            <UserProfile />
        </div>

    )
}

