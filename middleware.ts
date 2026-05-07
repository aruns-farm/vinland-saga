import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/* Each portfolio is its own deployment — no subdomain routing needed.
   This middleware is kept for potential future multi-site use. */
export function middleware(_req: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next|_static|favicon.ico|api).*)"],
}
