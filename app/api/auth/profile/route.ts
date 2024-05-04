import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get("_acc__token")

  if (!token) {
    return NextResponse.json({ message: "not loged in!" }, { status: 401 })
  }

  const { payload } = await jwtVerify(
    token.value,
    new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
  )

  return NextResponse.json(
    {
      id: payload.id,
      email: payload.email,
    },
    { status: 200 }
  )
}
