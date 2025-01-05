import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex items-center  bg-[#F7F7F7] rounded-lg w-full px-3 py-3 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        {icon && <span className="mr-5 mb-3 text-gray-200 size-3">{icon}</span>}
        <input
          type={type}
          className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

