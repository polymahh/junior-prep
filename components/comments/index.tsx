import Comment from "./comment"
import CommentInput from "./commentInput"
import { Prisma } from "@prisma/client"
import React, { useEffect, useState } from "react"

export type Comment = Prisma.commentGetPayload<{
    include: { user: { select: { username: true; image: true; name: true } }; _count: { select: { children: true } } }
}>

function Comments({ comments }: { comments: Comment[] }) {
    const [displayComments, setDisplayComments] = useState<(Comment & { level: number })[]>([])

    const readyComments = (comments: Comment[], parentId: string | null, level: number) => {
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
            {/* <div>
                <CommentInput />
            </div> */}
            <div className="space-y-2">
                {displayComments.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                        style={{ paddingLeft: comment.parentId ? `${comment.level * 48}px` : undefined }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments
