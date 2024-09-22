"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import CommentActions from "./commentActions"
import CommentInput from "./commentInput"
import { timeAgo } from "@/lib/utils"
import { CommentType } from "@/types/global"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { CSSProperties, useEffect, useState } from "react"

const Comment = ({ comment, style, teamId }: { comment: CommentType; style?: CSSProperties; teamId: string }) => {
    const [isUpdateInputOpen, setIsUpdateInputOpen] = useState<boolean>(false)
    const [isReplyInputOpen, setIsReplyInputOpen] = useState<boolean>(false)
    const [canEdit, setCanEdit] = useState<boolean>(false)

    const handleUpdateInputClose = () => setIsUpdateInputOpen(false)
    const handleReplyInputClose = () => setIsReplyInputOpen(false)

    const { data } = useSession()

    useEffect(() => {
        if (data?.user.id === comment?.userId) {
            setCanEdit(true)
        }
    }, [data?.user.id, comment?.userId])

    return (
        <div className="flex items-start gap-4 group" style={style}>
            <div className="flex-1 space-y-2 ">
                <Collapsible onOpenChange={(open: boolean) => setIsUpdateInputOpen(open)} open={isUpdateInputOpen}>
                    <div className="flex items-center gap-x-4 pt-2 ">
                        <Link
                            href={`https://github.com/${comment.user.username}`}
                            target="_blank"
                            className="font-medium text-muted-foreground group-hover:text-foreground"
                        >
                            @{comment.user.username}
                        </Link>
                        <div className="text-xs text-muted-foreground ">{timeAgo(comment.createdAt)}</div>
                        {canEdit ? (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <CommentActions commentId={comment.id} teamId={teamId} />
                            </div>
                        ) : null}
                    </div>
                    {isUpdateInputOpen && (
                        <CollapsibleContent>
                            <div className="pt-2" />
                            <CommentInput
                                type="update"
                                teamId={teamId}
                                currentCommentId={comment.id as string}
                                content={comment.content}
                                closeInput={handleUpdateInputClose}
                            />
                        </CollapsibleContent>
                    )}
                </Collapsible>
                {!isUpdateInputOpen && (
                    <>
                        <div className="flex">
                            <Link href={`https://github.com/${comment.user.username}`} target="_blank">
                                <Avatar className="shrink-0">
                                    <AvatarImage alt="@shadcn" src={comment.user.image || ""} />
                                    <AvatarFallback>{comment.user.username?.slice(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </Link>
                            <div className="ml-4 p-2 grow  bg-muted rounded-md">
                                <p>{comment.content}</p>
                                <span className="text-muted-foreground text-xs">
                                    {new Date(comment.createdAt) < new Date(comment.updateAt) ? "edited" : ""}
                                </span>
                            </div>
                        </div>

                        <Collapsible
                            onOpenChange={(open: boolean) => setIsReplyInputOpen(open)}
                            open={isReplyInputOpen}
                        >
                            <CollapsibleTrigger asChild>
                                <span className="ml-14 text-sm hover:underline cursor-pointer">Reply</span>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-4 space-y-4">
                                <div className="flex items-start gap-4">
                                    <Avatar className="shrink-0 ">
                                        <AvatarImage alt="@shadcn" src={data?.user.image || ""} />
                                        <AvatarFallback>
                                            {comment.user.username?.slice(0, 2).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <CommentInput
                                        type="reply"
                                        teamId={teamId}
                                        currentCommentId={comment.id as string}
                                        content={comment.content}
                                        closeInput={handleReplyInputClose}
                                    />
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    </>
                )}
            </div>
        </div>
    )
}

export default Comment
