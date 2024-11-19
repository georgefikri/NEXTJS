import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect `/` to `/en`
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // Allow all other requests
  return NextResponse.next();
}
