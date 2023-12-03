import React from "react"
import { Plus, PlusCircle } from "lucide-react"

import CreateTeamForm from "@/components/teams/CreateTeamForm"

const CreateTeam = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 py-4">
      <div className="flex h-16 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4  ">
        <PlusCircle className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold flex-1">Create Team</h1>
      </div>
      <div>
        {/* <div>
          <h1>Create Team</h1>
        </div> */}
        <CreateTeamForm />
      </div>
    </div>
  )
}

export default CreateTeam