"use client"

import { Icons } from "../icons"
import { MobileSidebar } from "../side-bar"
import ProfileDropdown from "./ProfileDropdown"
import { cn } from "@/lib/utils"
import { useParams, usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

function Navbar() {
    const [position, setPosition] = useState(0) //window.scrollY
    const params = useParams()
    const pathname = usePathname()
    let page = pathname.split("/").pop()

    useEffect(() => {
        const handleScroll = () => {
            setPosition(window.scrollY)
        }
        handleScroll()
        // TODO : add a debounce
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    if (params.id) {
        page = "teams"
    }
    const Icon = Icons[page as keyof typeof Icons]

    return (
        <div
            className={cn(
                "flex w-full items-center justify-center md:justify-start gap-2 border-b  p-4 md:px-8 sticky top-0 z-30",
                position > 0 ? "bg-border shadow-lg" : "",
            )}
        >
            <MobileSidebar />

            <Icon className="h-6 w-6 hidden md:block" />
            <h1 className="text-lg font-semibold flex-1 capitalize">{page?.split("_").join("/")}</h1>
            <div className="ml-auto ">
                <ProfileDropdown />
            </div>
        </div>
    )
}

export default Navbar
