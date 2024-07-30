import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

import { DOMAIN_URL } from './constants';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get('accessToken')?.value || null;

  if (pathname.startsWith(DOMAIN_URL.LOGIN) && accessToken) {
    return NextResponse.redirect(new URL(DOMAIN_URL.MAIN, request.url));
  }

  if (pathname.startsWith(DOMAIN_URL.WEDDING_PRODUCE) && !accessToken) {
    return NextResponse.redirect(new URL(DOMAIN_URL.LOGIN, request.url));
  }

  if (pathname.startsWith(DOMAIN_URL.PROFILE) && !accessToken) {
    return NextResponse.redirect(new URL(DOMAIN_URL.LOGIN, request.url));
  }
};

export const config = {
  matcher: [DOMAIN_URL.LOGIN, `${DOMAIN_URL.WEDDING_PRODUCE}/:id*`, DOMAIN_URL.PROFILE],
};
