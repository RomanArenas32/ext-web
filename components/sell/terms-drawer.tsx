'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TermsDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAgree: () => void
}

export function TermsDrawer({ open, onOpenChange, onAgree }: TermsDrawerProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
      
      {/* Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-12 h-1 bg-gray-200 rounded-full mb-2" />
          
          <div className="relative h-[200px] w-[280px]">
            <Image
              src="/img/drawer.png"
              alt="Product illustration"
              fill
              className="object-contain"
            />
          </div>
          
          <h2 className="text-xl font-semibold">Publicar aviso</h2>
          
          <p className="text-center text-muted-foreground text-sm max-w-[280px]">
            Sube tu producto o servicio para crear experiencias de los compradores y genera más ingresos.
          </p>

          <Button 
            className="w-full bg-[#1B4332] hover:bg-[#1B4332]/90 text-white rounded-full py-6"
            onClick={onAgree}
          >
            De acuerdo
          </Button>
        </div>
      </div>
    </div>
  )
}

