import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { MerchantCard } from "./productCard"
import { Cryptocurrencies } from '@/api/money'

const merchants = [
  {
    name: "Negocio 1",
    verified: true,
    transactions: 100,
    completionRate: 100,
    price: 3.768,
    currency: Cryptocurrencies.USDT,
    available: 108.13,
    orderLimit: "50-407.43 PEN",
    paymentMethods: [
      { name: "Credit Bank of Peru", icon: null },
      { name: "INTERBANK", icon: null },
      { name: "Yape", icon: null },
      { name: "Plin", icon: null },
    ],
  },
  {
    name: "Eldorado",
    verified: true,
    transactions: 100,
    completionRate: 100,
    price: 3.759,
    currency: "USDT",
    available: 108.13,
    orderLimit: "50-407.43 PEN",
    paymentMethods: [
      { name: "Credit Bank of Peru", icon: null },
      { name: "Yape", icon: null },
    ],
  },
]

export default function CustomerHome() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscador general"
          className="pl-9"
        />
      </div>
      <div className="space-y-4">
        {merchants.map((merchant) => (
          <MerchantCard key={merchant.name} {...merchant} />
        ))}
      </div>
    </div>
  )
}

