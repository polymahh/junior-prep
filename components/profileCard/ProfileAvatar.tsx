import React from "react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "../icons"

function ProfileAvatar() {
  return (
    <div className="flex items-center gap-4 flex-grow">
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
