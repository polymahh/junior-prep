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

    if (isTeamLoading) return <div>Loading ...</div>

    return isTeamSuccess ? (
        <>
            <div className="grid grid-cols-[auto_300px] grid-rows-[160px] gap-4">
                <div className="col-span-2 row-span-2 ">
                    <ProjectInfo {...data} />
                </div>
                {!isCommentsLoading && <Comments comments={comments} teamId={teamId} />}
                {/* <MemberSection /> */}
            </div>
        </>
    ) : null
}

export default TeamPreview
