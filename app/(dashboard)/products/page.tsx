"use client";

import { Header } from "@/components/common/header";
import ProductHome from "@/components/products/home";
import HomeServices from "@/components/services/home";
import { RoleSwitch } from "@/components/ui/role-swich";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/userContext";
import { useState } from "react";

export default function Page() {
    const [tab, setTab] = useState<"product" | "service">("product");
    const { user } = useUser();

    return (
        <div className="overflow-hidden shadow-lg">
            <Header text={`${user.address}`} link="/" />
            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <RoleSwitch tab={tab} onRoleChange={setTab} />
            </div>

            {tab === "product" ? <ProductHome /> : <HomeServices />}
        </div>
    );
}
