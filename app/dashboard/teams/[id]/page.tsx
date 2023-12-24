import React, { Suspense } from "react"

import TeamPreview from "@/components/teams/TeamPreview"

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params

  return (
    <div className="container m-auto flex flex-col gap-4 py-4">
      <Suspense fallback={"loading ..."}>
        <TeamPreview teamid={id} />
      </Suspense>
    </div>
  )
}

export default page
