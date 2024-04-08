"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useQuery } from "@tanstack/react-query"
import { ChevronRight, ExternalLink, Ghost } from "lucide-react"

import { siteConfig } from "@/config/site"
import { getItems } from "@/lib/resquest"

import { Icons } from "../icons"
import { Button, buttonVariants } from "../ui/button"
import Card from "./Card"

function TeamList() {
  const { data, isSuccess } = useQuery({
    queryKey: ["teams"],
    queryFn: () => getItems("/api/teams"),
  })

  //TODO: create defirent teams list for teams page

  useEffect(() => {
    if (isSuccess) {
      console.log("🚀 ~ TeamList ~ data:", data.teams)
    }
  }, [isSuccess])
  return (
    <div className="flex h-full flex-col gap-6 rounded-lg border p-4">
      <div className=" flex justify-between border-b pb-1">
        <span className="text-lg font-semibold">Teams:</span>
        <Link
          className={buttonVariants({
            variant: "link",
            size: "link",
            className: "justify-start",
          })}
          href={"/"}
        >
          <span>See More</span>
          <ExternalLink className="h-4" />
        </Link>
      </div>
      <div className="flex h-full flex-col gap-6 ">
        {isSuccess &&
          data?.teams?.map((team: any) => (
            <Card key={team.id} project={team.Project[0]} {...team} />
          ))}
      </div>
    </div>
  )
}

export default TeamList
