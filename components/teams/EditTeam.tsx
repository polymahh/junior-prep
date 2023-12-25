"use client"

import React from "react"
import { Pencil } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button, buttonVariants } from "../ui/button"
import CreateTeamForm from "./CreateTeamForm"

function EditTeam() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className={buttonVariants({
            variant: "secondary",
            className: "self-start",
            size: "sm",
          })}
        >
          <Pencil className="mr-2 h-5" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Team</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <CreateTeamForm />
      </DialogContent>
    </Dialog>
  )
}

export default EditTeam
