import { authOptions } from '@/lib/authOptions';
import { DefaultSession } from 'next-auth';
import NextAuth from 'next-auth/next';

declare module '@auth/core' {
    interface Session {
      user: {
        username: string;
      } & DefaultSession['user'];
    }
  }

const handler = NextAuth(authOptions)!;

export { handler as GET, handler as POST}