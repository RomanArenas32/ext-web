"use client";

import { Header } from "@/components/common/header";
import ProductPost from "@/components/post/postProduct";
import ServicePost from "@/components/post/postService";
import { RoleSwitch } from "@/components/ui/role-swich";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/userContext";
import { useState } from "react";

export default function Page() {
    const [tab, setTab] = useState<"product" | "service">("product");
    const { user } = useUser();
    return (
        <div className="overflow-hidden shadow-lg">
            <Header text={`Publicar aviso`} link="/sell" />
            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 justify-between">
                <RoleSwitch tab={tab} onRoleChange={setTab} />
            </div>

            {tab === "product" ? <ProductPost user={user}/> : <ServicePost user={user}/>}
        </div>
    );
}
