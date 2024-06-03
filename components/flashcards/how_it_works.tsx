import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Info } from "lucide-react"
import React from "react"

function HowItWorks() {
    return (
        <div className="ml-auto">
            <Popover>
                <PopoverTrigger>
                    <div className="flex gap-1 items-center text-muted-foreground text-sm cursor-pointer">
                        <span>How it work</span>
                        <Info className="h-4 w-4" />
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="text-xs">
                        <div className="pb-4">
                            <p>Your responses are based on how easy or hard you recall the answer</p>
                        </div>
                        <p>- Again: I couldn&apos;t recall</p>
                        <p>- Hard: I struggled to recall</p>
                        <p>- Good: I recalled with some effort</p>
                        <p>- Easy: I easily recalled</p>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default HowItWorks
