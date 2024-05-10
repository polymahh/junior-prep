"use client"

import { Icons } from "../icons"
import { MobileSidebar } from "../side-bar"
import ProfileDropdown from "./ProfileDropdown"
import { useParams, usePathname } from "next/navigation"
import React from "react"

function Navbar() {
    const params = useParams()
    const pathname = usePathname()
    let page = pathname.split("/").pop()

    if (params.id) {
        page = "teams"
    }
    const Icon = Icons[page as keyof typeof Icons]

    return (
        <div className="flex w-full items-center justify-center md:justify-start gap-2 bg-border py-4 px-4 md:px-8 sticky top-0 z-30 ">
            <MobileSidebar />

            <Icon className="h-6 w-6 hidden md:block" />
            <h1 className="text-lg font-semibold flex-1 capitalize">{page}</h1>
            <div className="ml-auto ">
                <ProfileDropdown />
            </div>
        </div>
    )
}

export default Navbar
