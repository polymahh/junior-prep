import { Button, buttonVariants } from "../ui/button"
import { ProfileForm } from "./MemberForm"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Plus } from "lucide-react"
import React from "react"

function MemberDialog() {
    return (
        <div>
            <Dialog>
                <DialogTrigger className="self-start" asChild>
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
                </DialogTrigger>
                <DialogContent className="  sm:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Add Member</DialogTitle>
                    </DialogHeader>
                    <ProfileForm />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default MemberDialog
