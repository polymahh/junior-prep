import { SignJWT, jwtVerify, type JWTPayload } from "jose"
import { sign } from "jsonwebtoken"

async function generateAccessToken(
  id: string,
  username: string
): Promise<string> {
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + 60 * 60 // one hour

  return new SignJWT({ id, username })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

async function generateRefreshToken(
  id: string,
  username: string
): Promise<string> {
  const iat = Math.floor(Date.now() / 1000)
  const exp = iat + parseInt(process.env.REFRESH_TOKEN_EXPIRES_IN!)

  return new SignJWT({ id, username })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

export { generateAccessToken, generateRefreshToken }
