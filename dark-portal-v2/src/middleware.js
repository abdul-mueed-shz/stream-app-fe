import { NextResponse } from 'next/server';

export function middleware(req) {
  // const { pathname } = req.nextUrl;
  // // If the user is trying to access the root path ('/')
  // if (pathname === '/') {
  //   // Redirect the user to '/dashboard'
  //   return NextResponse.redirect(new URL('/broadcast', req.url));
  // }
  // // Proceed as normal for other paths
  // return NextResponse.next();
}

// // Specify the routes the middleware applies to
// export const config = {
//   matcher: '/', // This applies the middleware to '/'
// };
