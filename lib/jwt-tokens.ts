import { SignJWT, jwtVerify } from "jose"

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

async function generateVerifyToken(email: string): Promise<string> {
  return new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

// async function isValidToken(token: string, type: string) {
//   try {
//     const { payload } = await jwtVerify(
//       token,
//       new TextEncoder().encode(
//         type === "access"
//           ? process.env.JWT_ACCESS_SECRET
//           : process.env.JWT_REFRESH_SECRET
//       )
//     )

//     return payload
//   } catch (error) {
//     console.log("invalid token", error)
//     return null
//   }
// }

export { generateAccessToken, generateRefreshToken, generateVerifyToken }
