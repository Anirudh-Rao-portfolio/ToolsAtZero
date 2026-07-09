import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host");

  if (host && host.startsWith("www.")) {
    const newHost = host.replace(/^www\./, "");
    url.host = newHost;
    // 301 Permanent Redirect
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.svg or other asset extensions
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|js|css)$).*)",
  ],
};
