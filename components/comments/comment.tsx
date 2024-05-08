"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import CommentActions from "./commentActions"
import CommentInput from "./commentInput"
import { timeAgo } from "@/lib/utils"
import { CommentType } from "@/types/global"
import { CSSProperties, useState } from "react"

const Comment = ({ comment, style, teamId }: { comment: CommentType; style?: CSSProperties; teamId: string }) => {
    const [isUpdateInputOpen, setIsUpdateInputOpen] = useState<boolean>(false)
    const [isReplyInputOpen, setIsReplyInputOpen] = useState<boolean>(false)

    const handleUpdateInputClose = () => setIsUpdateInputOpen(false)
    const handleReplyInputClose = () => setIsReplyInputOpen(false)

    return (
        <div className="flex items-start gap-4 group" style={style}>
            <Avatar className="flex-shrink-0">
                <AvatarImage alt="@shadcn" src={comment.user.image || "/user-avatar-placeholder.webp"} />
                <AvatarFallback>{comment.user.username?.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
                <Collapsible onOpenChange={open => setIsUpdateInputOpen(open)} open={isUpdateInputOpen}>
                    <div className="flex items-center gap-x-4 pt-2">
                        <div className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-foreground">
                            @{comment.user.username}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{timeAgo(comment.createdAt)}</div>
                        {/* We should check if the comment user id is the same as the logged in user id. I coudnt because there is no user provider yet \: */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <CommentActions commentId={comment.id} teamId={teamId} />
                        </div>
                    </div>
                    <CollapsibleContent>
                        <CommentInput
                            type="update"
                            teamId={teamId}
                            currentCommentId={comment.id as string}
                            content={comment.content}
                            closeInput={handleUpdateInputClose}
                        />
                    </CollapsibleContent>
                </Collapsible>
                {isUpdateInputOpen || (
                    <p className="space-x-2">
                        <span>{comment.content}</span>
                        <span className="text-gray-700 text-xs">
                            {new Date(comment.createdAt) < new Date(comment.updateAt) && "Edited"}
                        </span>
                    </p>
                )}
                <Collapsible onOpenChange={open => setIsReplyInputOpen(open)} open={isReplyInputOpen}>
                    <CollapsibleTrigger asChild>
                        <span className="!bg-transparent text-sm hover:underline cursor-pointer">Reply</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                        <div className="flex items-start gap-4">
                            <Avatar className="flex-shrink-0">
                                <AvatarImage alt="@jaredpalmer" src="/user-avatar-placeholder.webp" />
                                <AvatarFallback>Y</AvatarFallback>
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
            </div>
        </div>
    )
}

export default Comment
