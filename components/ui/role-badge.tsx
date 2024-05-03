import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const roleBadgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        FRONTEND:
          "border-transparent bg-sky-500 text-white hover:bg-sky-500/80",
        BACKEND:
          "border-transparent bg-fuchsia-700 text-white hover:bg-fuchsia-700/80",
        DESIGN: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        SENIOR:
          "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/80",
      },
    },
    defaultVariants: {
      variant: "FRONTEND",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof roleBadgeVariants> {
  tooltip?: string
}

function RoleBadge({ className, variant, tooltip, ...props }: BadgeProps) {
  return tooltip ? (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <div
            className={cn(roleBadgeVariants({ variant }), className)}
            {...props}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <div className={cn(roleBadgeVariants({ variant }), className)} {...props} />
  )
}

export { RoleBadge, roleBadgeVariants }
