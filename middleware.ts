import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, type NextRequest } from 'next/server';

const protectedRoutes = ['/aluno', '/admin'];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data: { session } } = await supabase.auth.getSession();
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route)) && !session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return res;
}

export const config = { matcher: ['/aluno/:path*', '/admin/:path*'] };
