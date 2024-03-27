import { Box } from '@mui/material'
import { CheckAuth, LoginRoute } from 'layouts'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { routes } from 'routes'
import Login from 'views/login'

function App() {
    return (
        <Box>
            <Router>
                <Routes>
                    <Route element={<CheckAuth />}>
                        {routes.map((route) => {
                            const Page = route.component
                            const Layout = route.layout
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Route>
                    <Route element={<LoginRoute />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>
                <ToastContainer theme="colored" />
            </Router>
        </Box>
    )
}

export default App
