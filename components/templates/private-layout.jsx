import React from "react"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

import { Icons } from "../icons"

export function PrivateLayout({ children }) {
  return (
    <>
      <div className=" flex flex-1">
        <div className="p-4 border-r">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="flex h-8 w-44" />
          </Link>
          <div className="pt-6 flex flex-col gap-4">
            <Link href={"/dashboard/profile"}>Profile</Link>
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}
