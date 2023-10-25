import React, { ReactNode } from "react"
import Link from "next/link"

import { SiteFooter } from "@/components/SiteFooter"
import { SiteHeader } from "@/components/site-header"

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
