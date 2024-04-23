"use client"

import React, { useEffect, useState } from "react"
import { UserAnswer } from "@prisma/client"
import { useMutation } from "@tanstack/react-query"
import {
  ArrowRightCircle,
  Check,
  CheckCheck,
  CheckCircle,
  CircleAlert,
  HelpCircle,
  X,
} from "lucide-react"

import { Flashcard, FlashcardResponse } from "@/types/flashcard"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { cn, findIndex, shuffleArray } from "@/lib/utils"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { queryClient } from "@/app/layout"

import { Button } from "../ui/button"

function Flashcards({
  flashcards,
  initialIndex,
  language,
}: {
  flashcards: Flashcard[]
  initialIndex: number
  language: string
}) {
  const [activeFlashcard, setActiveFlashcard] = useState<Flashcard>(
    flashcards[initialIndex]
  )
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const { mutate } = useMutation({
    mutationKey: ["javascript_flashcards"],
    mutationFn: async (
      answer: Omit<UserAnswer, "userId" | "createdAt" | "lastReviewed">
    ) => {
      const data = await flashcardsApi.sendAnswer(answer)
      return data
    },
  })

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleResponse = async (response: FlashcardResponse) => {
    const currentFlashcard: any = activeFlashcard
    const now = new Date().getTime()

    const intervalInDays = Math.ceil(
      (now - new Date(currentFlashcard.UserAnswer[0].lastReviewed).getTime()) /
        (1000 * 60 * 60 * 24)
    ) // Calculate interval in days

    // Update the ease factor and interval based on the user's response
    switch (response) {
      case "again":
        currentFlashcard.UserAnswer[0].easeFactor = Math.max(
          1.3,
          currentFlashcard.UserAnswer[0].easeFactor - 0.2
        )
        currentFlashcard.UserAnswer[0].interval = 1
        break
      case "hard":
        currentFlashcard.UserAnswer[0].easeFactor = Math.max(
          1.3,
          currentFlashcard.UserAnswer[0].easeFactor - 0.15
        )
        // Keep interval unchanged or slightly decrease it
        break
      case "good":
        // Maintain ease factor
        currentFlashcard.UserAnswer[0].interval =
          intervalInDays * currentFlashcard.UserAnswer[0].easeFactor
        break
      case "easy":
        currentFlashcard.UserAnswer[0].easeFactor += 0.15
        currentFlashcard.UserAnswer[0].interval =
          intervalInDays * currentFlashcard.UserAnswer[0].easeFactor

        break
      default:
        console.error("Invalid user response.")
        return
    }
    currentFlashcard.UserAnswer[0].response = response
    // const next =
    //   new Date(currentFlashcard.UserAnswer[0].lastReviewed).getTime() +
    //   currentFlashcard.UserAnswer[0].interval * 24 * 60 * 60 * 1000
    // currentFlashcard.UserAnswer[0]["nextReview"] = new Date(next)

    let newFlashcards: Flashcard[] = [...flashcards]
    let shuffledFlashcards = shuffleArray(newFlashcards)
    let nextIndex = findIndex(shuffledFlashcards)

    mutate(
      {
        flashcardId: currentFlashcard.id,
        easeFactor: currentFlashcard.UserAnswer[0].easeFactor,
        interval: currentFlashcard.UserAnswer[0].interval,
        response: response,
        languageName: language,
      },
      {
        onSuccess: (data) => {
          console.log("🚀 ~ handleResponse ~ nextIndex:", nextIndex)
          console.log(
            "🚀 ~ handleResponse ~ newFlashcards[nextIndex]:",
            shuffledFlashcards[nextIndex]
          )
          setActiveFlashcard(shuffledFlashcards[nextIndex])
          queryClient.setQueryData(
            ["javascript_flashcards"],
            () => newFlashcards
          )
        },
      }
    )

    api?.scrollPrev()
  }

  return (
    <div className="grow relative z-10 rounded-xl  p-2 group flex flex-col  justify-center items-center  ">
      <div className="relative flex flex-col justify-between mx-auto border rounded-xl h-full max-h-[600px] w-full max-w-[800px] pt-12 pb-4 px-4 lg:px-12 gap-6 overflow-hidden">
        <div className="text-sm text-muted-foreground absolute top-4 right-4 flex gap-1 items-center self-end ">
          <span>current - </span>
          <span
            className={cn(
              "h-2 w-2  rounded-full",
              activeFlashcard.UserAnswer[0].response === "again" && "bg-again",
              activeFlashcard.UserAnswer[0].response === "hard" && "bg-hard",
              activeFlashcard.UserAnswer[0].response === "good" && "bg-good",
              activeFlashcard.UserAnswer[0].response === "easy" && "bg-easy"
            )}
          ></span>
          <span className="">
            {activeFlashcard.id}/{flashcards.length}
          </span>
        </div>

        <Carousel
          className="flex h-full"
          setApi={setApi}
          opts={{ align: "end" }}
        >
          <CarouselContent className="h-full">
            <CarouselItem className="h-full flex basis-[95%] gap-4 ">
              {/* <div className="rounded-3xl bg-secondary border h-full w-[90vw] md:w-[60vw] max-w-[660px] flex  justify-center items-center"> */}
              <div className="rounded-3xl bg-secondary border w-full h-full flex justify-center items-center">
                <div className="w-full max-w-[80%]">
                  <h2 className="text-sm text-muted-foreground pb-4">
                    Question:
                  </h2>
                  <p>{activeFlashcard?.question}</p>
                </div>
              </div>
              <div
                className="hidden sm:flex items-center text-border cursor-pointer hover:text-muted-foreground m-auto "
                onClick={() =>
                  current === 1 ? api?.scrollNext() : api?.scrollPrev()
                }
              >
                <ArrowRightCircle
                  className={cn(
                    "h-8 w-8 my-auto ",
                    current === 2 ? "rotate-180" : ""
                  )}
                />
              </div>
            </CarouselItem>

            <CarouselItem className=" h-full basis-[90%]">
              <div className="rounded-3xl bg-secondary border h-full flex grow justify-center items-center">
                <div className="w-full max-w-[80%]">
                  <h2 className="text-sm text-muted-foreground  pb-4">
                    Answer:
                  </h2>
                  <p>{activeFlashcard?.answer}</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="flex gap-4 p-4 bg-secondary max-w-[300px] rounded-2xl mx-auto">
          <div
            className={cn(
              "rounded-xl   grow flex gap-2 p-2 px-4 flex-1 cursor-pointer",
              current === 1 ? "border border-again bg-background" : ""
            )}
            onClick={() => api?.scrollPrev()}
          >
            <HelpCircle className="text-again" />
            <span>question</span>
          </div>

          <div
            className={cn(
              "rounded-xl   grow flex gap-2 p-2 px-4 flex-1 cursor-pointer",
              current === 2 ? "border border-easy bg-background" : ""
            )}
            onClick={() => api?.scrollNext()}
          >
            <CheckCircle className="text-easy" />
            <span>answer</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 min-h-[40px] mt-4">
        {current === 2 && (
          <>
            <Button
              variant="outline"
              className="border-again rounded-xl"
              onClick={() => handleResponse("again")}
            >
              <X className="mr-2 text-again" />
              again
            </Button>
            <Button
              variant="outline"
              className="border-hard rounded-xl"
              onClick={() => handleResponse("hard")}
            >
              <CircleAlert className="mr-2 text-hard" />
              hard
            </Button>
            <Button
              variant="outline"
              className="border-good rounded-xl"
              onClick={() => handleResponse("good")}
            >
              <Check className="mr-2 text-good" />
              good
            </Button>
            <Button
              variant="outline"
              className="border-easy rounded-xl"
              onClick={() => handleResponse("easy")}
            >
              <CheckCheck className="mr-2 text-easy" />
              easy
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Flashcards
