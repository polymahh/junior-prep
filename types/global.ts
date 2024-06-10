import { Prisma, Role, Team, User } from "@prisma/client"

export type CommentType = Prisma.commentGetPayload<{
    include: {
        user: { select: { username: true; image: true; name: true } }
        _count: { select: { children: true } }
    }
}> & { action?: "update" | "new"; level?: number }

export interface TeamCardType extends Team {
    roles: Role[]
    creator: User
}
