import type { NextAuthConfig } from "next-auth";
import { isTokenAssigned } from "./manageToken";

export const authConfig = {
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }: any) {
      const isLoggedIn = !!auth?.user;
      const isAuthorized = nextUrl.pathname.startsWith("/chat");
      if (isAuthorized) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/chat", nextUrl));
      }
    },
  },
  providers: [],
} satisfies NextAuthConfig;
