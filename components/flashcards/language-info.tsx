import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Flashcard } from "@/types/flashcard"
import { useIsMutating } from "@tanstack/react-query"
import { SquareMousePointer } from "lucide-react"
import React, { useMemo } from "react"

const Numbercard = ({ name, number }: { name: string; number: number }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        className={cn(
                            "h-6 min-w-[26px]  rounded-md flex justify-center items-center text-white cursor-pointer",
                            name === "again" && "bg-again",
                            name === "hard" && "bg-hard",
                            name === "good" && "bg-good",
                            name === "easy" && "bg-easy",
                        )}
                    >
                        {number}
                    </div>
                </TooltipTrigger>
                <TooltipContent>{name}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

function LanguageInfo({ flashcards, activeFlashcard }: { flashcards: Flashcard[]; activeFlashcard: Flashcard }) {
    const isMutatingPosts = useIsMutating({
        mutationKey: ["javascript_flashcards"],
    })

    const cardsByResponse = useMemo(() => trackcards(), [isMutatingPosts])
    function trackcards() {
        const track = {
            again: 0,
            hard: 0,
            good: 0,
            easy: 0,
        }
        flashcards.map(card => {
            track[card.UserAnswer[0].response!] += 1
        })

        return track
    }

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-2 text-sm">
                {/* <span>All cards:</span> */}
                {Object.entries(cardsByResponse).map(([key, value]) => (
                    <Numbercard key={key} number={value} name={key} />
                ))}
                <span>current:</span>

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span
                                className={cn(
                                    "h-6 w-6 rounded-md text-white cursor-pointer ",
                                    activeFlashcard.UserAnswer[0].response === "again" && "bg-again",
                                    activeFlashcard.UserAnswer[0].response === "hard" && "bg-hard",
                                    activeFlashcard.UserAnswer[0].response === "good" && "bg-good",
                                    activeFlashcard.UserAnswer[0].response === "easy" && "bg-easy",
                                )}
                            >
                                <SquareMousePointer className=" p-1" />
                            </span>
                        </TooltipTrigger>
                        <TooltipContent>Current Card</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

export default LanguageInfo
