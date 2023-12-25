"use client"

import React from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Users } from "lucide-react"

import { getItems } from "@/lib/resquest"
import Comments from "@/components/comments"
import CreatorCard from "@/components/creatorCard"
import ProjectDescription from "@/components/projectDescription"
import Roles from "@/components/roles"

import ProjectInfo from "./ProjectInfo"

function TeamPreview({ teamid }: { teamid: string }) {
  const queryClient = useQueryClient()
  const {
    data: team,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["teams", teamid],
    queryFn: () => getItems(`/api/teams/${teamid}`),
    initialData: () => {
      return queryClient
        .getQueryData<{ teams?: [] }>(["teams"])
        ?.teams?.find((team: any) => team.id === teamid)
    },
  })
  // //TODO : if the user is the same as session user use session data
  console.log("🚀 ~ file: TeamPreview.tsx:19 ~ TeamPreview ~ data:", team)

  console.log(
    queryClient
      .getQueryData<{ teams?: [] }>(["teams"])
      ?.teams?.find((team: any) => team.id === teamid)
  )

  return isSuccess ? (
    <>
      <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
        <Users className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold">{team?.project?.name}</h1>
      </div>
      <div className="grid grid-cols-[auto_300px] grid-rows-[160px] auto-rows-fr gap-4">
        <div className="col-span-2 row-span-2 ">
          <ProjectInfo {...team} />
        </div>
        <Comments />
        <Roles />
      </div>
    </>
  ) : (
    "loading ..."
  )
}

export default TeamPreview
