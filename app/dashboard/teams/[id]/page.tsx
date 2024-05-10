import TeamPreview from "@/components/teams/TeamPreview"
import React, { Suspense } from "react"

const page = ({ params }: { params: { id: string } }) => {
    const { id } = params

    return <TeamPreview teamId={id} />
}

export default page
