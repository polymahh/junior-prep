import React, { useEffect, useMemo, useState } from "react"
import { useIsMutating, useQuery } from "@tanstack/react-query"
import { Info } from "lucide-react"
import { object } from "zod"

import { Flashcard, FlashcardResponse } from "@/types/flashcard"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { cn } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { queryClient } from "@/app/layout"

const Numbercard = ({ name, number }: { name: string; number: number }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* <Button variant="outline"> */}
          <div
            className={cn(
              "h-6 w-6 rounded-md flex justify-center items-center text-white cursor-pointer",
              name === "again" && "bg-again",
              name === "hard" && "bg-hard",
              name === "good" && "bg-good",
              name === "easy" && "bg-easy"
            )}
          >
            {number}
          </div>
          {/* </Button> */}
        </TooltipTrigger>
        <TooltipContent>{"Taged " + name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

function LanguageInfo({ flashcards }: { flashcards: Flashcard[] }) {
  const [cardsByResponse, setCardsByResponse] = useState<
    Record<FlashcardResponse, number>
  >(trackcards())

  const isMutatingPosts = useIsMutating({
    mutationKey: ["javascript_flashcards"],
  })

  // const cardsByResponse = useMemo(() => trackcards(), [isMutatingPosts])

  useEffect(() => {
    console.log("🚀 ~ LanguageInfo ~ isMutatingPosts:", isMutatingPosts)

    setCardsByResponse(trackcards())
  }, [isMutatingPosts])

  function trackcards() {
    const track = {
      again: 0,
      hard: 0,
      good: 0,
      easy: 0,
    }
    flashcards.map((card) => {
      track[card.UserAnswer[0].response!] += 1
    })

    return track
  }

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 text-sm">
        <span>All cards:</span>
        {Object.entries(cardsByResponse).map(([key, value]) => (
          <Numbercard key={key} number={value} name={key} />
        ))}
      </div>

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

export default LanguageInfo
