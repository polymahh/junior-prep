import React from "react"
import Link from "next/link"

import { Icons } from "../icons"

export function PrivateLayout({ children }) {
  return (
    <>
      <div className=" flex flex-1 ">
        <div className="border-r p-4">
          <Link href="/" className="flex items-center space-x-2 pb-6">
            <Icons.logo className="flex h-8 w-44" />
          </Link>
          <div className="flex flex-col gap-4">
            <Link href={"/dashboard/profile"}>Profile</Link>
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}
