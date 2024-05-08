import { queryClient } from "../providers"
import { Button } from "../ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { teamsApi } from "@/lib/api/teamsApi"
import { CommentType } from "@/types/global"
import { CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { useMutation } from "@tanstack/react-query"
import { Ellipsis } from "lucide-react"

const CommentActions = ({ teamId, commentId }: { teamId: string; commentId: string }) => {
    const { mutateAsync: deleteMutate, isPending: isDeleting } = useMutation({
        mutationFn: async () => await teamsApi.deleteTeamComment(teamId, commentId),
        onSuccess: () =>
            queryClient.setQueryData(["comments", teamId], (comments: CommentType[]) => {
                return comments.filter(comment => comment.id !== commentId)
            }),
    })

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                    <Ellipsis size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="right">
                    <DropdownMenuItem>
                        <CollapsibleTrigger>Edit comment</CollapsibleTrigger>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <DialogTrigger className="w-full text-left">Delete</DialogTrigger>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        Do you want to delete the comment? If it has replies they will be deleted as well!
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant={"destructive"} onClick={() => deleteMutate()} isLoading={isDeleting}>
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CommentActions
