import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // Define paths that require authentication
  const authRequiredPaths = ['/dashboard'];
  
  // Define paths that are only for unauthenticated users
  const authNotRequiredPaths = ['/signin', '/signup'];

  const path = request.nextUrl.pathname;

  // Redirect authenticated users away from auth pages
  if (isAuthenticated && authNotRequiredPaths.some(p => path.startsWith(p))) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users to signin
  if (!isAuthenticated && authRequiredPaths.some(p => path.startsWith(p))) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/signin', '/signup'],
}; 