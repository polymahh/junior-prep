"use client"

import Flashcards from "./flashcards"
import HowItWorks from "./how_it_works"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { findIndex } from "@/lib/utils"
import { Flashcard } from "@/types/flashcard"
import { useQuery } from "@tanstack/react-query"
import React from "react"

function LanguageFlashcards({ language }: { language: string }) {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["javascript_flashcards"],
        queryFn: async () => {
            const result = await flashcardsApi.getFlashcards(language)
            const cardsArray = result?.flashcards.Flashcard?.map((question: Flashcard) => {
                if (question.UserAnswer.length) {
                    return question
                } else {
                    return {
                        ...question,
                        UserAnswer: [
                            {
                                response: "again",
                                easeFactor: 1.3,
                                interval: 1,
                                lastReviewed: new Date(),
                            },
                        ],
                    }
                }
            })
            return cardsArray
        },
    })

    // console.log("setting time in localStorage")
    // const time_date = localStorage.getItem("timeSpent")?.split(",")[0]
    // const createdAt = data?.timeSpent.createdAt.split("T")[0]
    // if (time_date && time_date === createdAt) {
    //   return
    // } else {
    //   localStorage.setItem("timeSpent", createdAt + "," + data?.timeSpent.time)
    // }

    // useEffect(() => {
    //   console.log("setting time in localStorage")
    //   if (isSuccess && data.timeSpent) {
    //     const time_date = localStorage.getItem("timeSpent")?.split(",")
    //     const createdAt = data?.timeSpent?.createdAt.split("T")[0]
    //     console.log("🚀 ~ useEffect ~ time_date:", time_date, createdAt)
    //     if (time_date && time_date[0] === createdAt) {
    //       if (time_date[1] < data?.timeSpent.time) {
    //         localStorage.setItem(
    //           "timeSpent",
    //           createdAt + "," + data?.timeSpent.time
    //         )
    //       }
    //     } else {
    //       localStorage.setItem(
    //         "timeSpent",
    //         createdAt + "," + data?.timeSpent.time
    //       )
    //     }
    //   }
    // }, [isSuccess])

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>
    const initialIndex = findIndex(data)
    return (
        <>
            <HowItWorks />
            <Flashcards flashcards={data} initialIndex={initialIndex} language={language} />
        </>
    )
}

export default LanguageFlashcards
