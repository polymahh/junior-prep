"use client"

import { Button, buttonVariants } from "../ui/button"
import CreateTeamForm from "./CreateTeamForm"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Pencil } from "lucide-react"
import React, { useState } from "react"

//TODO team type
function EditTeam({ team }: any) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="self-start">
                <Button variant="secondary" size="sm" className="absolute top-2 right-2 px-2 " aria-label="Edit">
                    <Pencil className="  h-4" />
                    Edit
                </Button>
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
