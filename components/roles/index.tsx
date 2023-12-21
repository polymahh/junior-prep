import React from "react"
import { Plus } from "lucide-react"

import { Button, buttonVariants } from "../ui/button"

function Roles() {
  return (
    <div className="border h-full rounded-lg flex flex-col gap-6 p-4">
      <div className=" border-b pb-1 flex justify-between">
        <span className="text-lg font-semibold">Members:</span>
        <Button
          className={buttonVariants({
            variant: "secondary",
            className: "self-start",
            size: "sm",
          })}
        >
          <Plus className="h-5 mr-2" />
          Add
        </Button>
      </div>
      <div>0 members ...</div>
    </div>
  )
}

export default Roles
