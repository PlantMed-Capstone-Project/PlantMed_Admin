import { Box } from '@mui/material'
import { Sidebar } from 'layouts'
import { Route, Routes } from 'react-router-dom'
import { routes } from 'routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <Box>
            <Sidebar>
                <Routes>
                    {/* <Route element={<CheckAuth />}> */}
                    {routes.map((item) => (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={item.component}
                        />
                    ))}
                    {/* </Route> */}
                </Routes>
            </Sidebar>
            <ToastContainer theme="colored" />
        </Box>
    )
}

export default App
