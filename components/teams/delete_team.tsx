import { queryClient } from "../providers"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Button, buttonVariants } from "../ui/button"
import { toast } from "../ui/use-toast"
import { teamsApi } from "@/lib/api/teamsApi"
import { useMutation } from "@tanstack/react-query"
import { TrashIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

function DeleteTeam({ id }: { id: string }) {
    const router = useRouter()
    const { mutate } = useMutation({
        mutationFn: () => teamsApi.deleteTeam(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["teams"] })
            router.push("/dashboard/teams")
            router.replace("/dashboard/teams")
            toast({
                variant: "destructive",
                description: "Team Deleted successfully!",
            })
        },
    })
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="destructive"
                    size="sm"
                    className="absolute bottom-2 right-2 px-1  text-xs flex  gap-1"
                    aria-label="Delete"
                >
                    <TrashIcon size={14} className="mb-1" />
                    <span>Delete</span>
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Warning!</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone!
                        <br /> are you sure you want to delete this Team?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-md">Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/80"
                        onClick={() => mutate()}
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default DeleteTeam
