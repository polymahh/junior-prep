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
