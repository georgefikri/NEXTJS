import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with any supported locale
  const supportedLocales = ['en', 'ar'];
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  // Redirect if no locale is specified
  if (pathnameIsMissingLocale) {
    const locale = 'en'; // Default locale
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
