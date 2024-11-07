import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('Auth')?.value

  if (request.nextUrl.pathname == '/login' && !token) {
    return NextResponse.next()
  }

  try {
    const { payload } = await jwtVerify(
      decodeURI(token!.replace('Bearer ', '')).trim(),
      new TextEncoder().encode(process.env.TOKEN_SECRET_KEY)
    )

    if (payload && request.nextUrl.pathname == '/login') {
      return NextResponse.redirect(new URL('/subscribers', request.url))
    }
    if (payload) {
      return NextResponse.next()
    }
  } catch {
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.set('Auth', '', { maxAge: 0 })
    return response
  }
}

export const config = {
  matcher: ['/subscribers/:path*', '/subscribers', '/login']
}
