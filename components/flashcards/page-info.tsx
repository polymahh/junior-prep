import React from "react"
import { Info } from "lucide-react"

const Numbercard = ({ number }: { number: string }) => {
  return <div className="h-8 w-8 rounded-md bg-secondary">0</div>
}

const cats = ["12", "32", "3", "0"]

function PageInfo() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 text-sm">
        <span>All cards:</span>
        <div className="h-6 w-6 rounded-md bg-again flex justify-center items-center text-white">
          12
        </div>
        <div className="h-6 w-6 rounded-md bg-hard flex justify-center items-center text-white">
          32
        </div>
        <div className="h-6 w-6 rounded-md bg-good flex justify-center items-center text-white">
          3
        </div>
        <div className="h-6 w-6 rounded-md bg-easy flex justify-center items-center text-white">
          0
        </div>
      </div>
      <div className="flex gap-1 items-center text-muted-foreground text-sm">
        {/* TODO: add tooltip or popup */}
        <span>How it work</span>
        <Info className="h-4 w-4" />
      </div>
    </div>
  )
}

export default PageInfo
