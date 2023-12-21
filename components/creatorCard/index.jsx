"use client"

import React from "react"
import Link from "next/link"
import { ExternalLink, Pencil } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "../icons"
import { Button, buttonVariants } from "../ui/button"

function CreatorCard() {
  return (
    <div className="flex justify-between rounded-lg border p-4 h-full items-center">
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
      <div className="flex flex-col flex-grow gap-1">
        <span className=" text-muted-foreground text-sm">
          Project: 12/04/2023
        </span>
        <Link
          href={"/"}
          className="bg-secondary flex self-start gap-1 justify-center rounded-sm items-center p-1"
        >
          <span>Junior-prep</span> <ExternalLink className="h-5 pt-1" />
        </Link>
      </div>
      <Button
        className={buttonVariants({
          variant: "secondary",
          className: "self-start",
          size: "sm",
        })}
      >
        <Pencil className="h-5 mr-2" />
        Edit
      </Button>
    </div>
  )
}

export default CreatorCard
