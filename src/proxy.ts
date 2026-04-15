import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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
}

export const config = {
  matcher: [
    '/san-pham/:path*',
  ],
};
