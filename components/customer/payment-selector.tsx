'use client'

import { useState } from "react"
import { ChevronDown, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Cryptocurrencies, money } from "@/api/money"

export function PaymentSelector() {
  const [selectedCrypto, setSelectedCrypto] = useState<Cryptocurrencies>(Cryptocurrencies.USDT)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("")

  const getCurrencyImage = (code: string) => {
    return `/placeholder.svg?text=${code}&width=32&height=32`
  }

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 min-w-[140px]">
            {/*
                        <img src={getCurrencyImage(selectedCrypto)} alt={selectedCrypto} className="w-8 h-8 rounded-full" />

            */}
            {selectedCrypto}
            <ChevronDown className="h-4 w-4 ml-auto" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Select Cryptocurrency</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 grid gap-2">
            {Object.entries(Cryptocurrencies).map(([key, crypto]) => (
              <Button
                key={`crypto-${key}`}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setSelectedCrypto(crypto as Cryptocurrencies)
                }}
              >
                {/*
                 <img src={getCurrencyImage(crypto)} alt={crypto} className="w-6 h-6 mr-2 rounded-full" />*/}
                {crypto}
                
               
              </Button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 flex-1">
           
            <span className="text-muted-foreground">
              {selectedPaymentMethod || "Metodo de Pago"}
            </span>
            <ChevronDown className="h-4 w-4 ml-auto" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Select Payment Method</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 grid gap-2">
            {Object.entries(money).map(([key, method]) => (
              <Button
                key={`money-${key}`}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setSelectedPaymentMethod(method)
                }}
              >
                {/*
                 <img src={getCurrencyImage(method)} alt={method} className="w-6 h-6 mr-2 rounded-full" />*/}
                {method}
                
               
              </Button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      <Button variant="ghost" size="icon">
        <Filter className="h-4 w-4" />
      </Button>
    </div>
  )
}
