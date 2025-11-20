import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Only protect /admin routes
    if (request.nextUrl.pathname.startsWith("/admin")) {
        const authHeader = request.headers.get("authorization");

        if (authHeader) {
            const authValue = authHeader.split(" ")[1];
            const [user, pwd] = atob(authValue).split(":");

            const validUser = process.env.ADMIN_USER || "admin";
            const validPass = process.env.ADMIN_PASSWORD || "admin123";

            if (user === validUser && pwd === validPass) {
                return NextResponse.next();
            }
        }

        return new NextResponse("Auth Required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/admin/:path*",
};
