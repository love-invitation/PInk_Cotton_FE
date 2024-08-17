import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get('accessToken')?.value || null;

  if (pathname.startsWith('/login') && accessToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (pathname.startsWith('/wedding/produce') && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname.startsWith('/wedding/edit') && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (pathname.startsWith('/profile') && !accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
};

export const config = {
  matcher: ['/login', '/wedding/produce/:id*', '/wedding/edit/:id*', '/profile'],
};
