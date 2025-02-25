import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserToken } from "./app/actions/user";

export async function middleware(request: NextRequest) {
  const token = await getUserToken();
  if (token == null || token == undefined) {
    return NextResponse.redirect(new URL("/signin", request.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
