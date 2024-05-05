import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Textarea } from "../ui/textarea"
import { timeAgo } from "@/lib/utils"
import { Prisma } from "@prisma/client"
import { CSSProperties } from "react"

const Comment = ({
    comment,
    style,
}: {
    comment: Prisma.commentGetPayload<{ include: { user: { select: { username: true; image: true; name: true } } } }>
    style?: CSSProperties
}) => {
    return (
        <div className={"flex items-start gap-4"} style={style}>
            <Avatar className="flex-shrink-0">
                <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
                <AvatarFallback>{comment.user.username?.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
                <div className="flex items-center gap-x-4 pt-2">
                    <div className="font-medium text-gray-300">@{comment.user.username}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{timeAgo(comment.createdAt)}</div>
                </div>
                <p>{comment.content}</p>
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <span className="!bg-transparent text-sm hover:underline cursor-pointer">Reply</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                        <div className="flex items-start gap-4">
                            <Avatar className="flex-shrink-0">
                                <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>Y</AvatarFallback>
                            </Avatar>
                            <form className="flex-1 space-y-2">
                                <Textarea className="min-h-[100px]" placeholder="Write your reply..." />
                                <div className="flex justify-end gap-2">
                                    <CollapsibleTrigger asChild>
                                        <Button size="sm" variant="outline" type="button">
                                            Cancel
                                        </Button>
                                    </CollapsibleTrigger>
                                    <Button size="sm" type="button">
                                        Reply
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </div>
    )
}

export default Comment
