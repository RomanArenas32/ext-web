'use client'

import { Drawer } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TermsDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAgree: () => void
}

export function TermsDrawer({ open, onOpenChange, onAgree }: TermsDrawerProps) {
  return (
    <div className="bottom-0 left-0 right-0 bg-white p-6 rounded-t-2xl shadow-lg">
      <div className="p-6 space-y-6">
        <div className="flex justify-center">
          <Image
            src="/img/drawer.png"
            alt="Productos ilustración"
            width={200}
            height={200}
            className="mb-4"
          />
        </div>
        
        <h2 className="text-xl font-semibold text-center">Publicar aviso</h2>
        
        <p className="text-center text-muted-foreground">
          Sube tu producto o servicio para crear experiencias de los compradores y genera más ingresos.
        </p>

        <Button 
          className="w-full" 
          onClick={onAgree}
        >
          De acuerdo
        </Button>
      </div>
    </div>
  )
}
