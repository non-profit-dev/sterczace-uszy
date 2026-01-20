import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true"

  const isMaintenancePage = request.nextUrl.pathname === "/zaraz-wracamy"

  if (isMaintenanceMode && !isMaintenancePage) {
    return NextResponse.redirect(new URL("/zaraz-wracamy", request.url), { status: 302 })
  }

  if (!isMaintenanceMode && isMaintenancePage) {
    return NextResponse.redirect(new URL("/", request.url), { status: 302 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}
