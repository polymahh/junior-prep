"use client"

import React, { useState } from "react"
import { Pencil } from "lucide-react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button, buttonVariants } from "../ui/button"
import CreateTeamForm from "./CreateTeamForm"

//TODO team type
function EditTeam({ team }: any) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open}>
      <DialogTrigger className="self-start">
        <div
          className={buttonVariants({
            variant: "secondary",
            size: "sm",
          })}
        >
          <Pencil className="mr-2 h-5" />
          Edit
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll h-5/6 sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Team</DialogTitle>
        </DialogHeader>
        <CreateTeamForm team={team} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  )
}

export default EditTeam
