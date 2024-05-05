"use client"

import ProjectInfo from "./ProjectInfo"
import Comments from "@/components/comments"
import { teamsApi } from "@/lib/api/teamsApi"
import { useQuery } from "@tanstack/react-query"
import { Users } from "lucide-react"

function TeamPreview({ teamId }: { teamId: string }) {
    const {
        data,
        isLoading: isTeamLoading,
        isSuccess: isTeamSuccess,
    } = useQuery({
        queryKey: ["teams", teamId],
        queryFn: () => teamsApi.getTeam(teamId),
    })

    const { data: comments, isLoading: isCommentsLoading } = useQuery({
        queryKey: ["comments", teamId],
        queryFn: () => teamsApi.getTeamComments(teamId),
    })

    if (isTeamLoading || isCommentsLoading) return <div>Loading ...</div>

    return isTeamSuccess ? (
        <>
            <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
                <Users className="h-10 rounded-sm" />
                <h1 className="text-lg font-semibold">{data?.project?.name}</h1>
            </div>
            <div className="grid grid-cols-[auto_300px] grid-rows-[160px] auto-rows-fr gap-4">
                <div className="col-span-2 row-span-2 ">
                    <ProjectInfo {...data} />
                </div>
                <Comments comments={comments} />
                {/* <MemberSection /> */}
            </div>
        </>
    ) : null
}

export default TeamPreview
