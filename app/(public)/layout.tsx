import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/site-header"
import React, { ReactNode } from "react"

function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
        </>
    )
}

export default PublicLayout
