import { Button } from "../ui/button"
import { CollapsibleTrigger } from "../ui/collapsible"
import { Form, FormControl, FormField, FormItem } from "../ui/form"
import { Textarea } from "../ui/textarea"
import { queryClient } from "@/app/layout"
import { teamsApi } from "@/lib/api/teamsApi"
import { cn } from "@/lib/utils"
import { commentSchema, newCommentType } from "@/lib/validators/comment"
import { CommentType } from "@/types/global"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import React from "react"
import { useForm } from "react-hook-form"

function CommentInput({
    type,
    teamId,
    currentCommentId,
    content,
    closeInput,
}: {
    type: "comment" | "reply" | "update"
    teamId: string
    currentCommentId?: string
    content?: string
    closeInput?: () => void
}) {
    const form = useForm<newCommentType>({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            comment: type === "update" ? content : "",
        },
    })

    const { mutateAsync: createMutate, isPending: isCreating } = useMutation({
        mutationFn: async (commentDetails: newCommentType) => await teamsApi.newTeamComment(teamId, commentDetails),
        onSuccess: newComment => {
            form.reset({ comment: "" })
            queryClient.setQueryData(["comments", teamId], (comments: CommentType[]) => {
                return [newComment, ...comments, { action: "new", id: newComment.parentId || undefined }]
            })
            typeof closeInput !== "undefined" && closeInput()
        },
    })

    const { mutateAsync: updateMutate, isPending: isUpdating } = useMutation({
        mutationFn: async (commentDetails: newCommentType) =>
            await teamsApi.updateTeamComment(teamId, currentCommentId as string, commentDetails),
        onSuccess: updatedComment => {
            queryClient.setQueryData(["comments", teamId], (comments: CommentType[]) => {
                const newComments = comments.map(comment =>
                    comment.id === currentCommentId ? updatedComment : comment,
                )
                return [...newComments, { action: "update", id: updatedComment.id }]
            })
            typeof closeInput !== "undefined" && closeInput()
        },
    })

    const onSubmit = (data: newCommentType) => {
        const newComment = type === "comment" || type === "update" ? data : { ...data, parent: currentCommentId }
        if (form.formState.isDirty) type === "update" ? updateMutate(newComment) : createMutate(newComment)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mb-2 w-full space-y-2">
                <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Textarea
                                    placeholder={type === "comment" ? "Write your comment..." : "Write your reply..."}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className={cn("w-full flex gap-x-2", type !== "comment" && "justify-end")}>
                    {type !== "comment" && (
                        <CollapsibleTrigger asChild>
                            <Button size="sm" variant={"outline"} type="button">
                                Cancel
                            </Button>
                        </CollapsibleTrigger>
                    )}

                    <Button
                        size="sm"
                        disabled={isCreating || isUpdating || !form.formState.isDirty}
                        isLoading={isCreating || isUpdating}
                        type="submit"
                    >
                        {type === "comment" ? "Post comment" : type === "reply" ? "Reply" : "Update"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default CommentInput
