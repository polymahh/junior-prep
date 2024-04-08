import * as z from "zod"

const RoleName = z.enum(["FRONTEND", "BACKEND", "DESIGN", "SENIOR"])

export const teamSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  description: z.string(),
  repo: z.string().url({ message: "Invalid Url" }),
  creatorRole: RoleName.optional(),
  roles: z
    .array(
      z.object({
        active: z.boolean(),
        roleName: RoleName,
        stack: z.string(),
      })
    )
    .nonempty({
      message: "You have to select at least one role.",
    }),
})
// TODO: validate team response
// export const readTeam = z.object({
//   id: z.string(),
//   creatorId: z
//     .string()
//     .min(3, { message: "Username must be at least 3 characters" })
//     .max(50, { message: "Username must be less than 50 characters" }),
//   creatorRole: RoleName.optional(),
//   creator: z.object({
//     username: z
//       .string()
//       .min(3, { message: "Username must be at least 3 characters" })
//       .max(50, { message: "Username must be less than 50 characters" }),
//     image: z.string(),
//     githubId: z.string(),
//   }),
//   project: z.object({
//   createdAt: z.string(),
//   description: z.string(),
//   githubRepo: z.string(),
//   isCompleted: z.boolean(),
//   name : z.string(),
//   }),
//   roles: z
//     .array(
//       z.object({
//         active: z.boolean(),
//         roleName: RoleName,
//         stack: z.string(),
//       })
//     )
//     .nonempty({
//       message: "You have to select at least one role.",
//     }),
// })
export const updateTeam = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  description: z.string(),
  repo: z.string().url({ message: "Invalid Url" }),
  isCompleted: z.boolean().optional(),
})

export type teamType = z.infer<typeof teamSchema>
