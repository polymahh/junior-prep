"use client"

import { Icons } from "../icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import React from "react"

function ProfileAvatar() {
    return (
        <div className="flex items-center gap-4 grow">
            <Avatar className="h-28 w-28">
                <AvatarImage src="/images/polymad.jpg" alt="@shadcn" />
                <AvatarFallback className="text-4xl">PM</AvatarFallback>
            </Avatar>
            <div>
                <h2 className="text-2xl">PolyMad</h2>
                <Link href="" className="flex gap-1 items-center text-highlight">
                    <Icons.gitHub className=" h-4 w-4" />
                    <span>Github</span>
                </Link>
            </div>
        </div>
    )
}

export default ProfileAvatar
