export type { NextAuthConfig } from 'next-auth';
import { isTokenAssigned } from './manageToken';


export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isAuthorized = nextUrl.pathname.startsWith('/chat');
      if (isAuthorized) {
        if (isTokenAssigned.authToken) return true;
        return false;
      } else if (isTokenAssigned.authToken) {
        return Response.redirect(new URL('/chat', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
