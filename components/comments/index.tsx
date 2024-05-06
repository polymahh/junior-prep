import Comment from "./comment"
import CommentInput from "./commentInput"
import { CommentType } from "@/types/global"
import { Prisma } from "@prisma/client"
import React, { useEffect, useState } from "react"

function Comments({ comments, teamId }: { comments: CommentType[]; teamId: string }) {
    const [displayComments, setDisplayComments] = useState<(CommentType & { level: number })[]>([])

    const readyComments = (comments: CommentType[], parentId: string | null, level: number) => {
        const filteredComments = comments.filter(comment => comment.parentId === parentId)

        filteredComments.forEach(comment => {
            setDisplayComments(prevComments => [...prevComments, { ...comment, level }])
            readyComments(comments, comment.id, level + 1)
        })
    }

    useEffect(() => {
        setDisplayComments([])
        readyComments(comments, null, 0)
    }, [comments])

    return (
        <div className="border h-full rounded-lg flex flex-col gap-6 p-4 col-span-2">
            <div className=" border-b pb-1 flex justify-between">
                <span className="text-lg font-semibold">Discussion </span>
            </div>
            <div className="space-y-2">
                <div className="text-lg">Add comment</div>
                <CommentInput type="comment" teamId={teamId} />
            </div>
            <div className="space-y-2">
                {displayComments.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        style={{ paddingLeft: comment.parentId ? `${comment.level * 48}px` : undefined }}
                        teamId={teamId}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments
