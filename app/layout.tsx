import "@/styles/globals.css"
import Providers from "@/components/providers"
import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        title: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        siteName: siteConfig.name,
        images: [
            {
                url: "/thumbnail.png",
                width: 600,
                height: 400,
            },
        ],
        locale: "en-US",
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession()
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
                    <Providers session={session}>
                        <div className="relative flex min-h-screen flex-col ">{children}</div>
                    </Providers>
                    <Analytics />
                </body>
            </html>
        </>
    )
}
