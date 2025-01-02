"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RoleSwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  tab: "product" | "service"
  onRoleChange: (role: "product" | "service") => void
}

export function RoleSwitch({ tab, onRoleChange, className, ...props }: RoleSwitchProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 w-[60%] items-center mx-auto rounded-full bg-muted p-1",
        className
      )}
      {...props}
    >
      <button
        onClick={() => onRoleChange("product")}
        className={cn(
          "inline-flex items-center w-[50%] justify-center rounded-full px-8 py-1 text-sm transition-colors",
          tab === "product"
            ? "bg-background shadow"
            : "text-muted-foreground hover:bg-background/50"
        )}
      >
        Productos
      </button>
      <button
        onClick={() => onRoleChange("service")}
        className={cn(
          "inline-flex items-center w-[50%] justify-center rounded-full px-8 py-1 text-sm transition-colors",
          tab === "service"
            ? "bg-background shadow"
            : "text-muted-foreground hover:bg-background/50"
        )}
      >
        Servicios
      </button>
    </div>
  )
}

