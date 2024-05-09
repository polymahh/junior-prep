import "@/styles/globals.css"
import Providers from "@/components/providers"
import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased",
                        fontSans.variable,
                        fontMono.variable,
                    )}
                >
                    <Providers>
                        <div className="relative flex min-h-screen flex-col ">{children}</div>
                    </Providers>
                </body>
            </html>
        </>
    )
}
