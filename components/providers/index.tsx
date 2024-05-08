"use client"

import { Toaster } from "../ui/toaster"
import { ThemeProvider } from "./theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import * as React from "react"

const Providers = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        // With SSR, we usually want to set some default staleTime
                        // above 0 to avoid refetching immediately on the client
                        refetchOnWindowFocus: false,
                        retry: false,
                        staleTime: Infinity,
                    },
                },
            }),
    )
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            <Toaster />
        </ThemeProvider>
    )
}

export default Providers
