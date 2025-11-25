import { NextResponse } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/login' || path === '/signup' || path === '/forgot-password' || path === '/send-otp' || path === '/change-password'

    const token = request.cookies.get('auth_token')?.value

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/signup',
        '/forgot-password',
        '/send-otp',
        '/change-password',
        '/dashboard/:path*',
    ],
}
