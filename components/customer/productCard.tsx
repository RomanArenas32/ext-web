import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle, CreditCard } from 'lucide-react'

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
  orderLimit: string
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
  orderLimit,
  paymentMethods,
}: MerchantCardProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex-row items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary/10 grid place-items-center">
          <span className="text-primary font-semibold">{name[0]}</span>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          {verified && <CheckCircle className="h-5 w-5 text-green-500" />}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{transactions} transacciones</span>
          <span>{completionRate}% completion</span>
          <Badge variant="secondary">{completionRate}%</Badge>
        </div>
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">S/ {price.toFixed(3)}</span>
            <span className="text-muted-foreground">/{currency}</span>
          </div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Available</span>
              <span className="font-medium">{available} {currency}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order limit</span>
              <span className="font-medium">{orderLimit}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-4">
        <div className="flex flex-wrap gap-2">
          {paymentMethods.map((method) => (
            <Badge key={method.name} variant="secondary" className="flex items-center gap-1">
              <CreditCard className="h-3 w-3" />
              {method.name}
            </Badge>
          ))}
        </div>
        <Button className="w-full bg-green-500 hover:bg-green-600">Buy</Button>
      </CardFooter>
    </Card>
  )
}

