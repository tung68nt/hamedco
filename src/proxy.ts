import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

<<<<<<< HEAD
/**
 * Next.js Proxy (replaces middleware in this version).
 * Handles auth protection for /admin routes + SEO headers for /san-pham.
 */
export default async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // ========== Auth Protection for /admin routes ==========
  const isLoginPage = pathname === "/admin/login";
  const isAdminRoute = pathname.startsWith("/admin");
  const isApiRoute = pathname.startsWith("/api");

  if (isAdminRoute && !isApiRoute) {
    // Check for Supabase auth cookies
    // Supabase stores session in a cookie named like: sb-<project-ref>-auth-token
    const cookies = request.cookies.getAll();
    const hasAuthToken = cookies.some(cookie => {
      if (cookie.name.includes('sb-') && cookie.name.includes('-auth-token')) {
        // Verify the cookie has actual content (not empty/expired)
        try {
          const value = decodeURIComponent(cookie.value);
          // Supabase stores as base64 JSON array: [access_token, refresh_token, ...]
          // At minimum, the cookie should contain a non-empty value
          if (value && value.length > 10) {
            return true;
          }
        } catch {
          return false;
        }
      }
      return false;
    });

    // Redirect unauthenticated users away from admin (except login page)
    if (!hasAuthToken && !isLoginPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    // Redirect authenticated users away from login page
    if (hasAuthToken && isLoginPage) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/trang-chu";
      return NextResponse.redirect(url);
    }
  }

  // ========== SEO Logic for /san-pham pages ==========
  if (pathname.startsWith('/san-pham')) {
    const hasFilter = searchParams.has('filter');
    const hasSort = searchParams.has('sort');
    const hasPage = searchParams.has('page');

    if (hasFilter || hasSort) {
      const response = NextResponse.next();
      response.headers.set('X-Robots-Tag', 'noindex, follow');
      return response;
    }

    if (hasPage) {
      const response = NextResponse.next();
      if (searchParams.get('page') === '1') {
        response.headers.set('X-Robots-Tag', 'noindex, follow');
      }
      return response;
    }
  }

  // ========== Standard Headers ==========
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  // Return with modified headers
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
=======
export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Only apply to product listing pages
  if (!pathname.startsWith('/san-pham')) {
    return NextResponse.next();
  }

  // Check for filter/sort parameters
  const hasFilter = searchParams.has('filter');
  const hasSort = searchParams.has('sort');
  const hasPage = searchParams.has('page');

  // If filter or sort param exists, add noindex header
  if (hasFilter || hasSort) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, follow');
    return response;
  }

  // For paginated pages, allow indexing but use self-canonical (handled in page component)
  if (hasPage) {
    const response = NextResponse.next();
    // Page 1 of pagination - could be index, others may vary
    if (searchParams.get('page') === '1') {
      response.headers.set('X-Robots-Tag', 'noindex, follow');
    }
    return response;
  }

  return NextResponse.next();
>>>>>>> origin/main
}

export const config = {
  matcher: [
<<<<<<< HEAD
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
=======
    '/san-pham/:path*',
>>>>>>> origin/main
  ],
};
