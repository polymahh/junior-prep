import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const cookieStore = cookies()

    cookieStore.delete("_acc__token")
    cookieStore.delete("_ref__token")

    return NextResponse.json({ status: 201 })
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    )
  }
}
