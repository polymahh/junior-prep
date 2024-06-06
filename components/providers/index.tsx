"use client"

import { Toaster } from "../ui/toaster"
import { ThemeProvider } from "./theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import * as React from "react"

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: Infinity,
        },
    },
})

const Providers = ({ children, session }: { children: React.ReactNode; session: Session | null }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
                <SessionProvider session={session}>{children}</SessionProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <Toaster />
        </ThemeProvider>
    )
}

export default Providers
