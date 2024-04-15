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
}
