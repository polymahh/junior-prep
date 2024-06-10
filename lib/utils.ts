import { Flashcard } from "@/types/flashcard"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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

export function timeAgo(dateString: Date): string {
    const previousDate = new Date(dateString)
    const currentDate = new Date()
    const timeDifference = currentDate.getTime() - previousDate.getTime()

    const secondsAgo = Math.floor(timeDifference / 1000)
    const minutesAgo = Math.floor(secondsAgo / 60)
    const hoursAgo = Math.floor(minutesAgo / 60)
    const daysAgo = Math.floor(hoursAgo / 24)
    const weeksAgo = Math.floor(daysAgo / 7)
    const monthsAgo = Math.floor(daysAgo / 30)
    const yearsAgo = Math.floor(daysAgo / 365)

    if (yearsAgo > 0) {
        return yearsAgo + "y ago"
    } else if (monthsAgo > 0) {
        return monthsAgo + "mo ago"
    } else if (weeksAgo > 0) {
        return weeksAgo + "w ago"
    } else if (daysAgo > 0) {
        return daysAgo + "d ago"
    } else if (hoursAgo > 0) {
        return hoursAgo + "h ago"
    } else if (minutesAgo > 0) {
        return minutesAgo + "m ago"
    } else {
        return secondsAgo + "s ago"
    }
}
