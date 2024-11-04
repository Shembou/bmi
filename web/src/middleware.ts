import { jwtVerify } from 'jose'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('Auth')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  try {
    const { payload } = await jwtVerify(
      decodeURI(token.replace('Bearer ', '')).trim(),
      new TextEncoder().encode(process.env.TOKEN_SECRET_KEY)
    )

    if (payload) {
      return NextResponse.next()
    }
  } catch {
    request.cookies.delete('Auth')
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/subscribers/:path*', '/subscribers']
}
