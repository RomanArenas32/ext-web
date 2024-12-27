"use client"

import ProductHome from "@/components/products/home"
import SellerHome from "@/components/seller/home"
import { RoleSwitch } from "@/components/ui/role-swich"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Page() {
    const [role, setRole] = useState<"product" | "seller">("product")

    return (
        <div className="py-0">

            <div className="h-[76px] bg-green-800  mb-2 flex items-center gap-4 p-6 justify-center">
                <Link href="/">
                    <button className="absolute left-4">
                        <ChevronLeft className="text-white w-6 h-6" />
                    </button>
                </Link>

                <h2 className="w-full text-center text-white font-bold -ml-10 text-[18px]">¡EmprendeYA!</h2>

            </div>

            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <RoleSwitch role={role} onRoleChange={setRole} />
            </div>

            {role === "product" ? <ProductHome /> : <SellerHome />}

        </div>

    )
}

