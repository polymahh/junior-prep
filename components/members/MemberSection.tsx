import React from "react"
import { Plus } from "lucide-react"

import { Button, buttonVariants } from "../ui/button"
import MemberDialog from "./MemberDialog"

function MemberSection() {
  return (
    <div className="border h-full rounded-lg flex flex-col gap-6 p-4">
      <div className=" border-b pb-1 flex justify-between">
        <span className="text-lg font-semibold">Members:</span>
        <MemberDialog />
      </div>
      <div>0 members ...</div>
    </div>
  )
}

export default MemberSection
