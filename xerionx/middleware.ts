import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    // Allow access to login page without token
    if (pathname === '/admin/login') {
      if (token) {
        try {
          await verify(token);
          return NextResponse.redirect(new URL('/admin', request.url));
        } catch {
          return NextResponse.next();
        }
      }
      return NextResponse.next();
    }

    // Check authentication for other admin routes
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      await verify(token);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
