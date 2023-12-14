import * as z from "zod"


export const roleSchema = z
  .object({
  name:z
  .string()
  .min(3, { message: "name must be at least 3 characters" })
  .max(25, { message: "name must be less than 50 characters" }),
  stack:z.string()
 
})