import { Prisma } from "@prisma/client"

export type CommentType = Prisma.commentGetPayload<{
    include: { user: { select: { username: true; image: true; name: true } }; _count: { select: { children: true } } }
}>
