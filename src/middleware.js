import { NextRequest, NextResponse } from "next/server";

export default function middleware(NextRequest) {
  const token = NextRequest.cookies.get("key")?.value;

  const signInURL = new URL("/", NextRequest.url);
  const dashboard = new URL("/dashboard/projetos", NextRequest.url);

  if (!token) {
    if (NextRequest.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInURL);
  }

  if (NextRequest.nextUrl.pathname === "/") {
    return NextResponse.redirect(dashboard);
  }
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
