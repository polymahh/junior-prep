import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"
import { db } from "@/db"
import { jwtVerify } from "jose"

import { Token } from "@/types/token"
import { generateAccessToken } from "@/lib/jwt-tokens"

export default async function getRefreshToken() {
  let accessToken = null
  let newRefreshToken = null
  const tokens = cookies()
  const refreshToken = tokens.get("_ref__token")?.value

  if (!refreshToken) return { accessToken, newRefreshToken }

  const { payload }: { payload: Token } = await jwtVerify(
    refreshToken,
    new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
  )

  accessToken = await generateAccessToken(payload.id, payload.email)
  newRefreshToken = await generateAccessToken(payload.id, payload.email)

  return { accessToken, newRefreshToken }
}
