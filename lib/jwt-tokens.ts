import { SignJWT } from "jose"

async function generateAccessToken(
  id: string,
  username: string
): Promise<string> {
  return new SignJWT({ id, username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

async function generateRefreshToken(
  id: string,
  username: string
): Promise<string> {
  return new SignJWT({ id, username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("4weeks")
    .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

export { generateAccessToken, generateRefreshToken }
