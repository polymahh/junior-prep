import "@/styles/globals.css"
import { Metadata } from "next"
import { cookies } from "next/headers"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"

import { siteConfig } from "@/config/site"
import { authApi } from "@/lib/api/authApi"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Providers from "@/components/providers"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}
export const queryClient = new QueryClient()

export default async function RootLayout({ children }: RootLayoutProps) {
  // await queryClient.prefetchQuery({
  //   queryKey: ["profile"],
  //   queryFn: async () => await authApi.getProfile(),
  // })
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Providers>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable,
              fontMono.variable
            )}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="relative flex min-h-screen flex-col ">
                <HydrationBoundary state={dehydrate(queryClient)}>
                  {children}
                </HydrationBoundary>
              </div>
            </ThemeProvider>
          </body>
        </Providers>
      </html>
    </>
  )
}
