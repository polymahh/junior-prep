import React from "react"
import { Info } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function HowItWorks() {
  return (
    <div className="ml-auto">
      <HoverCard>
        <HoverCardTrigger>
          <div className="flex gap-1 items-center text-muted-foreground text-sm cursor-pointer">
            <span>How it work</span>
            <Info className="h-4 w-4" />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-[250px]">
          <div className="text-xs">
            <div className="pb-4">
              <p>
                Your responses are based on how easy or hard you recall the
                answer
              </p>
            </div>
            <p>- Again: I couldn&apos;t recall</p>
            <p>- Hard: I struggled to recall</p>
            <p>- Good: I recalled with some effort</p>
            <p>- Easy: I easily recalled</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default HowItWorks
