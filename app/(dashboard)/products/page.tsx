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
        <div>

            <div className="h-[56px] flex items-center gap-4 p-4 justify-start">
                <Link
                    href="/"
                    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ChevronLeft />
                </Link>

                <h2 className="w-full text-center text-[16px]">¡EmprendeYA!</h2>

            </div>

            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <RoleSwitch role={role} onRoleChange={setRole} />
            </div>

            {role === "product" ? <ProductHome /> : <SellerHome />}

        </div>

    )
}

