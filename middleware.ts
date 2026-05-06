import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? ""

  /* strip port for local dev */
  const hostname = host.replace(/:.*/, "")

  /* extract subdomain from <sub>.ketils.farm or <sub>.localhost */
  const parts = hostname.split(".")

  let slug: string | null = null

  if (hostname.endsWith(".ketils.farm") && parts.length >= 3) {
    slug = parts[0]
  } else if (hostname.endsWith(".localhost") && parts.length >= 2) {
    /* local: arun.localhost */
    slug = parts[0]
  }

  if (!slug || slug === "www") return NextResponse.next()

  const url = req.nextUrl.clone()
  url.pathname = `/sites/${slug}${url.pathname === "/" ? "" : url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ["/((?!_next|_static|favicon.ico|api).*)"],
}
