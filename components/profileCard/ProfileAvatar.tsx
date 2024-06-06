"use client"

import { Icons } from "../icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"
import Link from "next/link"
import React from "react"

function ProfileAvatar() {
    const { data } = useSession()
    //TODO: loading skeleton
    return (
        <div className="flex items-center gap-4 grow">
            <Avatar className="h-16 w-16 md:h-28 md:w-28">
                <AvatarImage src={data?.user?.image ?? ""} alt="profile image" />
                <AvatarFallback className="text-2xl md:text-4xl uppercase">{data?.user?.username?.[0]}</AvatarFallback>
            </Avatar>
            <div>
                <h2 className="text-lg md:text-2xl">{data?.user?.username}</h2>
                <Link
                    href={`https://github.com/${data?.user?.username}`}
                    target="_blank"
                    className="flex gap-1 items-center text-highlight"
                >
                    <Icons.gitHub className=" h-4 w-4" />
                    <span>Github</span>
                </Link>
            </div>
        </div>
    )
}

export default ProfileAvatar
