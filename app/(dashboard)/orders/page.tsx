import { Separator } from "@/components/ui/separator"
import OrdersView from "@/components/sell/ordenes"
import { Header } from "@/components/common/header"



export default function Page() {

    return (
        <div className=" overflow-y-auto bg-white">
            <Header text="Ordenes" link="/"/>

            <Separator />
            <div className="flex flex-row items-center gap-8 p-4 py-12 justify-between">
                <OrdersView />
            </div>
        </div>

    )
}

