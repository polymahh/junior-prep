import TeamPreview from "@/components/teams/TeamPreview"
import React, { Suspense } from "react"

const page = ({ params }: { params: { id: string } }) => {
    const { id } = params

    return (
        <div className="container m-auto flex flex-col gap-4 py-4">
            <TeamPreview teamId={id} />
        </div>
    )
}

export default page
