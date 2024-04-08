import { NextResponse } from "next/server"
import { db } from "@/db"
import { hash } from "bcrypt"

import { registerSchema } from "@/lib/validators/auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { username, email, password, confirmPassword } =
      registerSchema.parse(body)

    // check if the email exist in the db

    const existingEmail = await db.user.findUnique({
      where: { email: email },
    })

    if (password !== confirmPassword) {
      return NextResponse.json(
        { user: null, message: "Passwords don't match" },
        { status: 409 }
      )
    }

    if (existingEmail) {
      return NextResponse.json(
        { user: null, message: "Email already exists" },
        { status: 409 }
      )
    }
    // check if the email exist in the db

    const existingUsername = await db.user.findUnique({
      where: { username: username },
    })

    if (existingUsername) {
      return NextResponse.json(
        { user: null, message: "Username already exists" },
        { status: 409 }
      )
    }
    const hashedPassword = await hash(password, 10)
    const newUser = await db.user.create({
      data: {
        email: email,
        password: hashedPassword,
        provider: "LOCAL",
      },
    })

    const { password: newPass, ...rest } = newUser

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.log("🚀 ~ file: users route.ts:45 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
