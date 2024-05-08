import Comment from "./comment"
import CommentInput from "./commentInput"
import { CommentType } from "@/types/global"
import React, { useEffect, useState } from "react"

function Comments({ comments, teamId }: { comments: CommentType[]; teamId: string }) {
    const [displayComments, setDisplayComments] = useState<CommentType[]>([])

    const readyComments = (comments: CommentType[], parentId: string | null, level: number) => {
        let results: (CommentType & { level: number })[] = []
        const filteredComments = comments.filter(comment => comment.parentId === parentId)

        filteredComments.forEach(comment => {
            results.push({ ...comment, level })
            results = results.concat(readyComments(comments, comment.id, level + 1))
        })
        return results
    }

    const updateComments = () => {
        const displayCommentsClone = [...displayComments]
        const lastObject = comments.at(-1)

        switch (lastObject?.action) {
            case "new":
                if (lastObject.id) {
                    const parentCommentIndex = displayComments.findIndex(comment => comment.id === lastObject.id)
                    const parentComment = displayComments[parentCommentIndex]
                    displayCommentsClone.splice(parentCommentIndex + 1, 0, {
                        ...comments[0],
                        level: parentComment.level! + 1,
                    })
                    setDisplayComments(displayCommentsClone)
                } else {
                    setDisplayComments(prevComments => [comments[0], ...prevComments])
                }
                break
            case "update":
                const updatedComment = comments.find(comment => comment.id === lastObject.id)
                setDisplayComments(
                    displayCommentsClone.map(comment =>
                        comment.id === lastObject.id
                            ? { ...comment, content: updatedComment?.content as string }
                            : comment,
                    ),
                )
                break
            default:
                setDisplayComments(readyComments(comments, null, 0))
                break
        }
    }

    useEffect(() => updateComments(), [comments])

    return (
        <div className="border h-full rounded-lg flex flex-col gap-6 p-4 col-span-2">
            <div className="border-b pb-1 flex justify-between">
                <span className="text-lg font-semibold">Discussion</span>
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
                        style={{ paddingLeft: comment.parentId ? `${comment.level! * 48}px` : undefined }}
                        teamId={teamId}
                    />
                ))}
            </div>
        </div>
    )
}

export default Comments
