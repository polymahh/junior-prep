import { User } from "@/types/user"
import { JWTPayload, SignJWT, jwtVerify } from "jose"

async function generateAccessToken(user: User): Promise<string> {
    return new SignJWT({ ...user })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("15m")
        .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

async function generateRefreshToken(user: User): Promise<string> {
    return new SignJWT({ ...user })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("4w")
        .sign(new TextEncoder().encode(process.env.JWT_REFRESH_SECRET as string))
}

async function generateVerifyToken(email: string, secret: string): Promise<string> {
    return new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("15m")
        .sign(new TextEncoder().encode(secret as string))
}

async function extractPayload(
    jwtToken: string,
    tokenSecret: string,
    withBearer: boolean = false,
): Promise<JWTPayload | boolean> {
    const token = withBearer ? jwtToken.split("Bearer ")[1] : jwtToken
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(tokenSecret))
        return payload
    } catch (error) {
        return false
    }
}

export { generateAccessToken, generateRefreshToken, extractPayload, generateVerifyToken }
