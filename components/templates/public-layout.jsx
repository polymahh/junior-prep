import React from "react"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export function PublicLayout({ children }) {
  return (
    <>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      {/* <SiteFooter /> */}
      <div className="flex justify-end gap-1 p-4">
        <span>Made with ♥ by</span>
        <Link
          href="https://github.com/polymahh"
          target="_blank"
          rel="noreferrer"
          className="underline text-fuchsia-700"
        >
          Othmane
        </Link>
      </div>
    </>
  )
}
