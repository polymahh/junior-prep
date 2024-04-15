"use client"

import React, { useEffect, useState } from "react"

import { Flashcard, FlashcardResponse } from "@/types/flashcard"
import { shuffleArray } from "@/lib/utils"

import PageInfo from "./page-info"
import QuestionCard from "./question-card"

function Questions({ language_questions, user_answers }: any) {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(
    language_questions.map((question: any, index: number) => {
      let answer = user_answers.find((a: any) => a.id === question.id)
      if (answer) {
        return {
          ...question,
          ...answer,
          index,
        }
      } else {
        return {
          ...question,
          index,
          response: "again",
          easeFactor: 1.3,
          interval: 1,
          lastReviewed: new Date(),
        }
      }
    })
  )
  const [renderNextFlashcard, setRenderNextFlashcard] = useState(false)
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(
    findNextIndex()
  )
  const [activeFlashcard, setAcrtiveFlashcard] = useState<Flashcard>(
    flashcards[currentFlashcardIndex]
  )

  const [cardsByResponse, setCardsByResponse] = useState<
    Record<FlashcardResponse, number>
  >(trackcards())

  // Function to handle user response and update flashcard
  const handleResponse = (response: FlashcardResponse) => {
    const currentFlashcard = activeFlashcard
    const now = new Date().getTime()
    console.log(
      "🚀 ~ handleResponse ~ now:",
      now,
      new Date(currentFlashcard.lastReviewed)
    )
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
      shuffleArray(newFlashcards)
      return newFlashcards
    })
    setRenderNextFlashcard(true)
  }

  function findNextIndex() {
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
    return nextIndex
  }

  useEffect(() => {
    if (renderNextFlashcard) {
      const nextIndex = findNextIndex()
      console.log("🚀 ~ useEffect ~ flashcards:", flashcards)
      console.log(activeFlashcard)

      console.log(
        "🚀 ~ useEffect ~ CurrentFlashcardIndex:",
        currentFlashcardIndex
      )
      console.log("🚀 ~ useEffect ~ nextIndex:", nextIndex)
      setCardsByResponse(trackcards())
      setCurrentFlashcardIndex(nextIndex)
      setAcrtiveFlashcard(flashcards[nextIndex])
      setRenderNextFlashcard(false)
    }
  }, [renderNextFlashcard])

  function trackcards() {
    const track = {
      again: 0,
      hard: 0,
      good: 0,
      easy: 0,
    }
    flashcards.map((card) => {
      track[card.response!] += 1
    })

    return track
  }

  return (
    <>
      <PageInfo cardsByResponse={cardsByResponse} />
      <QuestionCard
        handleResponse={handleResponse}
        activeFlashcard={activeFlashcard}
      />
    </>
  )
}

export default Questions
