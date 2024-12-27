import * as React from "react"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative flex items-center justify-center">
        <input
          type={type}
          className={cn(
            "flex h-[40px] w-full rounded-md border border-input bg-transparent px-[110px] py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground mx-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        <Search className="absolute left-10 w-6 h-6 text-gray-400 items-center mt-4" />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
