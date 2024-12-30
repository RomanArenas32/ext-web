"use client";

import { Header } from "@/components/common/header";
import ProductHome from "@/components/products/home";
import SellerHome from "@/components/seller/home";
import { RoleSwitch } from "@/components/ui/role-swich";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Page() {
    const [role, setRole] = useState<"product" | "seller">("product");

    
    return (
        <div className="overflow-hidden shadow-lg">
            <Header text="Av. Angelica Gamarra 358" link="/" />
            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <RoleSwitch role={role} onRoleChange={setRole} />
            </div>

            {role === "product" ? <ProductHome /> : <SellerHome />}
        </div>
    );
}
