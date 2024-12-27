import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

interface PaymentMethod {
  name: string
  icon: React.ReactNode
}

interface MerchantCardProps {
  name: string
  verified: boolean
  transactions: number
  completionRate: number
  price: number
  currency: string
  available: number
  shipping: string
  paymentMethods: PaymentMethod[]
}

export function MerchantCard({
  name,
  verified,
  transactions,
  completionRate,
  price,
  currency,
  available,
  shipping,
  paymentMethods,
}: MerchantCardProps) {
  return (
    <Card className="w-full max-w-2xl p-6">
      <CardContent className="p-0 space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-emerald-100 grid place-items-center">
            <span className="text-emerald-700 text-lg font-semibold">{name[0]}</span>
          </div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-medium">{name}</h3>
            {verified && <CheckCircle className="h-5 w-5 text-emerald-500 fill-emerald-500" />}
          </div>
        </div>

        <div className="flex items-center gap-8 text-gray-600">
          <span>{transactions} transactiones</span>
          <span>{completionRate}% completados</span>
          <div className="flex items-center gap-2">
            {/*
                        <ThumbsUpIcon className="h-5 w-5" />

            */}
            <span>{completionRate}%</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight">S/ {price.toFixed(2)}</span>
              <span className="text-gray-500">/{currency}</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Disponible</span>
                <span className="font-medium">+{available} Unidades</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Envío:</span>
                <span className="font-medium">{shipping}</span>
              </div>
            </div>

            <div className="flex gap-2">
              {paymentMethods.map((method) => (
                <Badge 
                  key={method.name} 
                  variant="outline" 
                  className="bg-white text-gray-600 rounded-full px-4 py-1 border-gray-300"
                >
                  {method.name}
                </Badge>
              ))}
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-emerald-400 hover:bg-emerald-500 text-white rounded-full px-8 text-lg font-medium h-14"
          >
            Buy
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ThumbsUpIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}

