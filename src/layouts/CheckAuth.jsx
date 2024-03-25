import { ACCESS_TOKEN } from 'constant'
import { Navigate, Outlet } from 'react-router-dom'
import { readCookie } from 'utils/cookie'

export default function CheckAuth() {
    const isLogin = readCookie(ACCESS_TOKEN)
    if (!isLogin) {
        return <Navigate to="login" />
    }

    return <Outlet />
}
