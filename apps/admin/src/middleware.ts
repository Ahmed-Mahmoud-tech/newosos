// import createMiddleware from 'next-intl/middleware';
// import { routing } from './translation/routing';
// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const response = intlMiddleware(request);
//   if (request.nextUrl.pathname === '/ar/profile') {
//     return NextResponse.rewrite(new URL('/ar/hello', request.url));
//   }
//   return response;
// }

// const intlMiddleware = createMiddleware(routing);
// export const config = {
//   matcher: ['/', '/(ar|en)/:path*'], // Paths for intl middleware
// };

import createMiddleware from 'next-intl/middleware';
import { routing } from './translation/routing';
import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale } from '@repo/common';

// Create the intl middleware from next-intl
const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for API routes, static files, and other paths that shouldn't have localization applied
  if (
    pathname.startsWith('/_next') || // Skip Next.js internal files (e.g., JS, CSS)
    pathname.startsWith('/api') || // Skip API routes
    pathname.includes('.') // Skip static assets like images, CSS, etc.
  ) {
    return NextResponse.next(); // Proceed without applying the middleware
  }

  // Skip custom language redirection for paths that already contain a locale (e.g., /ar or /en)
  if (!pathname.startsWith('/ar') && !pathname.startsWith('/en')) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // Continue with the next-intl middleware after handling custom logic
  return intlMiddleware(request);
}
