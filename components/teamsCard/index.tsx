"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ChevronRight, ExternalLink, Ghost } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { Button, buttonVariants } from "../ui/button"
import Card from "./Card"

function TeamsCard() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch("/api/teams", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTeams(data.team))
  }, [])

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
        {teams.length
          ? teams.map((team: any) => <Card key={team.id} team={team} />)
          : "Loading ..."}
      </div>
    </div>
  )
}

export default TeamsCard
