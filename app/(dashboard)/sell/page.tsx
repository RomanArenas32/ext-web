
import { ChevronLeft, Mail, ShieldCheck, Smartphone, Upload } from "lucide-react"
import UserProfile from "@/components/sell/homecell"
import Link from "next/link"



export default function Page() {

    return (
        <div>
            <div className="bg-white w-full max-w-md pb-4 rounded-lg overflow-hidden">
                <div className="bg-[#1A4B3D] text-white p-6 flex items-center justify-between relative h-[20vh]">
                    <div className="w-full flex flex-row justify-between px-4">
                        <Link href="/">
                            <ChevronLeft className="text-white w-6 h-6" />
                        </Link>
                        <Upload />
                    </div>
                </div>
                {/* Contenedor del círculo azul */}
                <div className="relative">
                    <div className="absolute -top-[35px] left-4 size-[70px] bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        K
                    </div>
                </div>

                <div className="flex flex-col items-start gap-[10px] px-6 py-3 mt-8">
                    <h1 className="text-lg font-semibold">Kimoda</h1>
                    <div className="flex items-center gap-2 text-sm text-green-600">
                        <span className="flex items-center gap-1">
                            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
                            Online
                        </span>
                        <span>| Verified user</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                        <span>130 ventas</span> | <span>100.00%</span>
                    </div>
                    <div className="flex gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Mail className="w-4 h-4" /> Email
                        </span>
                        <span className="flex items-center gap-1">
                            <Smartphone className="w-4 h-4" /> SMS
                        </span>
                        <span className="flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4" /> KYC
                        </span>
                    </div>
                </div>

            </div>

            <UserProfile />
        </div>

    )
}

