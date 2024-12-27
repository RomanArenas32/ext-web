
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Upload } from "lucide-react"
import UserProfile from "@/components/sell/homecell"
import Link from "next/link"



export default function Page() {

    return (
        <div>
            <div className="bg-white w-full max-w-md pb-4 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-green-800 text-white p-6 flex items-center justify-between relative h-[20vh]">
                    <div className="w-full flex flex-row justify-between px-4">
                        <Link href="/">
                            <ChevronLeft className="text-white w-6 h-6" />
                        </Link>
                        <Upload />
                    </div>
                </div>
            </div>

            <Separator />
            <UserProfile />
        </div>

    )
}

