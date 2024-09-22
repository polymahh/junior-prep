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
        queryKey: [`${language}_flashcards`],
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
