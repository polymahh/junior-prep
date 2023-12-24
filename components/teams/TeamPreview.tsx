"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"
import { Users } from "lucide-react"

import { getItems } from "@/lib/resquest"
import Comments from "@/components/comments"
import CreatorCard from "@/components/creatorCard"
import ProjectDescription from "@/components/projectDescription"
import Roles from "@/components/roles"

function TeamPreview({ teamid }: { teamid: string }) {
  console.log("🚀 ~ file: TeamPreview.tsx:14 ~ TeamPreview ~ teamid:", teamid)

  const { data: team } = useQuery({
    queryKey: ["teams", teamid],
    queryFn: () => getItems(`/api/teams/${teamid}`),
  })

  //TODO : if the user is the same as session user use session data

  //   const { data: user } = useQuery({
  //     queryKey: ["users", team?.team?.creatorId],
  //     enabled: team?.team?.creatorId != null,
  //     queryFn: () => getItems(`/api/users/${team?.team?.creatorId}`),
  //   })

  console.log(team)

  return (
    <>
      <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
        <Users className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold"></h1>
      </div>
      <div className="grid grid-cols-[auto_300px] grid-rows-[160px] auto-rows-fr gap-4">
        <div className="col-span-2 ">
          <CreatorCard />
        </div>
        <div className="col-span-2 ">
          <ProjectDescription />
        </div>
        <Comments />
        <Roles />
      </div>
    </>
  )
}

export default TeamPreview
