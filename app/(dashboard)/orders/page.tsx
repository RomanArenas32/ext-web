import { Separator } from "@/components/ui/separator"
import OrdersView from "@/components/orders/ordenes"
import { Header } from "@/components/common/header"



export default function Page() {

    return (
        <div>
            <Header text="Ordenes" link="/" />
            <Separator />
            <OrdersView />
        </div>

    )
}

