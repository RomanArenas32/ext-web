"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface RoleSwitchProps extends React.HTMLAttributes<HTMLDivElement> {
  role: "customer" | "seller"
  onRoleChange: (role: "customer" | "seller") => void
}

export function RoleSwitch({ role, onRoleChange, className, ...props }: RoleSwitchProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 items-center rounded-full bg-muted p-1",
        className
      )}
      {...props}
    >
      <button
        onClick={() => onRoleChange("customer")}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-8 py-1 text-sm transition-colors",
          role === "customer"
            ? "bg-background shadow"
            : "text-muted-foreground hover:bg-background/50"
        )}
      >
        Buy
      </button>
      <button
        onClick={() => onRoleChange("seller")}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-8 py-1 text-sm transition-colors",
          role === "seller"
            ? "bg-background shadow"
            : "text-muted-foreground hover:bg-background/50"
        )}
      >
        Sell
      </button>
    </div>
  )
}

