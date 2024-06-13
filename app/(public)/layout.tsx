import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/site-header"
import React, { ReactNode } from "react"

function PublicLayout({ children }: { children: ReactNode }) {
    return (
        <section className="flex flex-col justify-between min-h-screen">
            <SiteHeader />
            <div className=" overflow-x-hidden grow ">{children}</div>

            <SiteFooter />
        </section>
    )
}

export default PublicLayout
