"use client"

import { CustomerHome } from "@/components/customer/home"
import { SellerHome } from "@/components/seller/home"
import { RoleSwitch } from "@/components/ui/role-swich"
import { ChevronLeft, Search } from "lucide-react"
import { useState } from "react"

export default function Page() {
    const [role, setRole] = useState<"customer" | "seller">("customer")

    return (
        <div>
            <div className="h-[56px] flex items-center gap-4 p-4 justify-between">
                <ChevronLeft /> 
                <h2>Emprende ya</h2>
                <Search />
            </div>
           
            <div className="flex flex-col items-center gap-8 p-4">
                <RoleSwitch role={role} onRoleChange={setRole} />
                {role === "customer" ? <CustomerHome /> : <SellerHome />}
            </div>
        </div>

    )
}

