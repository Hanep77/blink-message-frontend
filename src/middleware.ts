import NextAuth from 'next-auth';
import { authConfig } from './authconfig';
import { NextRequest, NextResponse } from 'next/server';
//
export default NextAuth(authConfig).auth;
//
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

// export function middleware(request: NextRequest) {
//   if(`${request.cookies}`){
//       return NextResponse.redirect(new URL('/chat',request.url))
//   }
// }
