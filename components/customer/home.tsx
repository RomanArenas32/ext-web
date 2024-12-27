import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { MerchantCard } from "./productCard"
import { Cryptocurrencies } from '@/api/money'
import { PaymentSelector } from "./payment-selector"

const merchants = [
  {
    id:1,
    name: "Negocio 1",
    verified: true,
    transactions: 130,
    completionRate: 100,
    price: 80.00,
    currency: "USDT",
    available: 50,
    shipping: "24hrs",
    paymentMethods: [
      { name: "Credit Bank of Peru", icon: null },
      { name: "INTERBANK", icon: null },
    ],
  },
  {
    id: 2,
    name: "Negocio 1",
    verified: true,
    transactions: 130,
    completionRate: 100,
    price: 80.00,
    currency: "USDT",
    available: 50,
    shipping: "24hrs",
    paymentMethods: [
      { name: "Credit Bank of Peru", icon: null },
      { name: "INTERBANK", icon: null },
    ],
  },
  
]

export default function CustomerHome() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar producto"
          className="pl-9"
        />
      </div>
      <PaymentSelector />
      <div className="space-y-4">
        {merchants.map((merchant) => (
          <MerchantCard key={merchant.id} {...merchant} />
        ))}
      </div>
    </div>
  )
}

