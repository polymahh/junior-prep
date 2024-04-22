import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { Flashcard } from "@/types/flashcard"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function urlCallback(calback: string, request: any) {
  const loginUrl = new URL(calback, request.url)
  loginUrl.searchParams.set("from", request.nextUrl.pathname)
  return loginUrl
}

// Function to shuffle an array (Fisher-Yates algorithm)
export const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export function findIndex(arr: Flashcard[]) {
  console.log("🚀 ~ findIndex ~ arr:", arr)
  // Find the next flashcard with the earliest next review date
  let earliestNextReviewDate = Infinity
  let nextIndex = 0
  for (let i = 0; i < arr?.length; i++) {
    const flashcard = arr[i]
    const nextReviewDate =
      new Date(flashcard.UserAnswer[0].lastReviewed).getTime() +
      flashcard.UserAnswer[0].interval * 24 * 60 * 60 * 1000
    if (nextReviewDate < earliestNextReviewDate) {
      earliestNextReviewDate = nextReviewDate
      nextIndex = i
    }
  }
  return nextIndex
}
