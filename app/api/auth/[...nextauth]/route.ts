import NextAuth from "next-auth";
import { authOptions } from "./authOptions";



export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };