import { SignJWT } from "jose"

async function generateAccessToken(id: string, email: string): Promise<string> {
  return new SignJWT({ id, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

async function generateRefreshToken(
  id: string,
  email: string
): Promise<string> {
  return new SignJWT({ id, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("4w")
    .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

export { generateAccessToken, generateRefreshToken }
