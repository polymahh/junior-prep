"use client"

import React, { useEffect, useState } from "react"

import { Flashcard, FlashcardResponse } from "@/types/flashcard"

import PageInfo from "./page-info"
import QuestionCard from "./question-card"

function Questions({ language_questions, user_answers }: any) {
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0)
  const [flashcards, setFlashcards] = useState<Flashcard[]>(
    language_questions.map((question) => {
      let answer = user_answers.find((a: any) => a.id === question.id)
      if (answer) {
        return {
          ...question,
          ...answer,
        }
      } else {
        return {
          ...question,
          response: "again",
          easeFactor: 2.5,
          interval: 1,
          lastReviewed: new Date(),
        }
      }
    })
  )

  const [activeFlashcard, setAcrtiveFlashcard] = useState<Flashcard>(
    flashcards[currentFlashcardIndex]
  )

  // Function to handle user response and update flashcard
  const handleResponse = (response: FlashcardResponse) => {
    const currentFlashcard = activeFlashcard
    const now = new Date().getTime()
    const intervalInDays = Math.ceil(
      (now - new Date(currentFlashcard.lastReviewed).getTime()) /
        (1000 * 60 * 60 * 24)
    ) // Calculate interval in days
    console.log("🚀 ~ getNextFlashcardIndex ~ intervalInDays:", intervalInDays)

    // Update the ease factor and interval based on the user's response
    switch (response) {
      case "again":
        currentFlashcard.easeFactor = Math.max(
          1.3,
          currentFlashcard.easeFactor - 0.2
        )
        currentFlashcard.interval = 1
        break
      case "hard":
        currentFlashcard.easeFactor = Math.max(
          1.3,
          currentFlashcard.easeFactor - 0.15
        )
        // Keep interval unchanged or slightly decrease it
        break
      case "good":
        // Maintain ease factor
        currentFlashcard.interval = intervalInDays * currentFlashcard.easeFactor
        break
      case "easy":
        currentFlashcard.easeFactor += 0.15
        currentFlashcard.interval = intervalInDays * currentFlashcard.easeFactor

        break
      default:
        console.error("Invalid user response.")
        return
    }

    setFlashcards((prevFlashcards) => {
      const newFlashcards = [...prevFlashcards]
      newFlashcards[currentFlashcardIndex] = { ...currentFlashcard, response }
      return newFlashcards
    })
    setAcrtiveFlashcard({ ...currentFlashcard, response })
  }

  useEffect(() => {
    // Find the next flashcard with the earliest next review date
    let earliestNextReviewDate = Infinity
    let nextIndex = 0
    for (let i = 0; i < flashcards.length; i++) {
      const flashcard = flashcards[i]
      const nextReviewDate =
        new Date(flashcard.lastReviewed).getTime() +
        flashcard.interval * 24 * 60 * 60 * 1000
      if (nextReviewDate < earliestNextReviewDate) {
        earliestNextReviewDate = nextReviewDate
        nextIndex = i
      }
    }

    console.log("🚀 ~ useEffect ~ flashcards:", flashcards)
    console.log(activeFlashcard)

    setCurrentFlashcardIndex(nextIndex)
  }, [activeFlashcard])

  return (
    <>
      <PageInfo />
      <QuestionCard handleResponse={handleResponse} />
    </>
  )
}

export default Questions
