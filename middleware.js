import { NextResponse, NextRequest } from "next/server";

export const config = {
  matcher: [
    "/appointment/:path*",
    "/salon/:path*",
    "/auth/user/:path*",
    "/auth/barber/:path*",
    "/user/:path*",
    "/barber/:path*",
  ],
};

export default function middleware(req, res) {
  const { cookies } = req;
  const jwt = cookies.get("access");
  const Beautician = cookies.get("Beautician") === "true" ? true : false;
  const url = req.nextUrl.clone();

  if (url.pathname.includes("/auth/user")) {
    if (jwt) {
      if (Beautician) {
        return NextResponse.redirect(new URL("/barber/dashboard", req.url));
      } else {
        return NextResponse.redirect(new URL("/user/dashboard", req.url));
      }
    } else {
      return NextResponse.next();
    }
  } else if (url.pathname.includes("/auth/barber")) {
    if (jwt) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/user/login", req.url));
    }
  } else if (url.pathname.includes("/user")) {
    if (jwt) {
      if (Beautician) {
        return NextResponse.redirect(new URL("/barber/dashboard", req.url));
      } else {
        return NextResponse.next();
      }
    } else {
      return NextResponse.redirect(new URL("/auth/user/login", req.url));
    }
  } else if (url.pathname.includes("/barber")) {
    if (jwt) {
      if (Beautician) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/user/dashboard", req.url));
      }
    } else {
      return NextResponse.redirect(new URL("/auth/user/login", req.url));
    }
  } else {
    if (jwt) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/user/login", req.url));
    }
  }
}
