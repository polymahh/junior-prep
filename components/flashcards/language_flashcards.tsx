"use client"

import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { Flashcard } from "@/types/flashcard"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { findIndex } from "@/lib/utils"

import Flashcards from "./flashcards"
import HowItWorks from "./how_it_works"
import LanguageInfo from "./language-info"

function LanguageFlashcards({ language }: { language: string }) {
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["javascript_flashcards"],
    queryFn: async () => {
      const result = await flashcardsApi.getFlashcards(language)
      const cardsArray = result?.Flashcard?.map(
        (question: Flashcard, index: number) => {
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
        }
      )
      return cardsArray
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error</div>
  const initialIndex = findIndex(data)
  return (
    <>
      {/* <LanguageInfo flashcards={data} /> */}
      <HowItWorks />
      <Flashcards
        flashcards={data}
        initialIndex={initialIndex}
        language={language}
      />
    </>
  )
}

export default LanguageFlashcards
