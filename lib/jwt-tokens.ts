import { sign } from "jsonwebtoken"

const generateAccessToken = (id: string, username: string): string => {
  const payload = { id, username }
  return sign(payload, process.env.JWT_ACCESS_SECRET as string, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as string,
  })
}

const generateRefreshToken = (id: string, username: string): string => {
  const payload = { id, username }
  return sign(payload, process.env.JWT_REFRESH_SECRET as string, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as string,
  })
}

export { generateAccessToken, generateRefreshToken }
