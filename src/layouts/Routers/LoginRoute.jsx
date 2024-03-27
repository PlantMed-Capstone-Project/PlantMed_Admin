import { ACCESS_TOKEN } from 'constant'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { readCookie } from 'utils/cookie'

export default function LoginRoute() {
    const isLogin = readCookie(ACCESS_TOKEN)
    const { pathname } = useLocation()
    const route = pathname === '/login'

    if (isLogin && route) {
        return <Navigate to="/" />
    }

    return <Outlet />
}
