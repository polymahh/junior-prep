import React from "react"
import { Info } from "lucide-react"
import { object } from "zod"

import { FlashcardResponse } from "@/types/flashcard"
import { cn } from "@/lib/utils"

const Numbercard = ({ name, number }: { name: string; number: number }) => {
  return (
    <div
      className={cn(
        "h-6 w-6 rounded-md flex justify-center items-center text-white",
        name === "again" && "bg-again",
        name === "hard" && "bg-hard",
        name === "good" && "bg-good",
        name === "easy" && "bg-easy"
      )}
    >
      {number}
    </div>
  )
}

function PageInfo({
  cardsByResponse,
}: {
  cardsByResponse: Record<FlashcardResponse, number>
}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 text-sm">
        <span>All cards:</span>
        {Object.entries(cardsByResponse).map(([key, value]) => (
          <Numbercard key={key} number={value} name={key} />
        ))}
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
