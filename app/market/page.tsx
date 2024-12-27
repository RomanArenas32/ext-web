"use client"

import NavigationFooter from "@/components/common/panelFooter"
import  CustomerHome  from "@/components/customer/home"
import SellerHome from "@/components/seller/home"
import { RoleSwitch } from "@/components/ui/role-swich"
import { Separator } from "@/components/ui/separator"
import { ChevronLeft, Search } from "lucide-react"
import { useState } from "react"
import Confirmation from "@/components/seller/confirmación"

export default function Page() {
    const [role, setRole] = useState<"customer" | "seller">("customer")

    return (
        <div>
            <div className="h-[56px] flex items-center gap-4 p-4 justify-between">
                <ChevronLeft />
                <h2 className="font-bold">¡EmprendeYA!</h2>
                <Search className="text-green-500" />
            </div>
            
            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <RoleSwitch role={role} onRoleChange={setRole} />
                
            </div>

            {role === "customer" ? <CustomerHome /> : <SellerHome />}
<Confirmation />
            <NavigationFooter />
        </div>

    )
}

