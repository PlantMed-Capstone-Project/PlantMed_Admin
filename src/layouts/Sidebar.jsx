import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import BadgeIcon from '@mui/icons-material/Badge'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import ManageHistoryIcon from '@mui/icons-material/ManageHistory'
import MenuIcon from '@mui/icons-material/Menu'
import ReportIcon from '@mui/icons-material/Report'
import StarsIcon from '@mui/icons-material/Stars'
import {
    Box,
    CssBaseline,
    Divider,
    IconButton,
    List,
    Toolbar,
    Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import ListItemCustom from 'components/ListItemMenu'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as S from './Layout.styled'

const menu = [
    {
        key: 'overview',
        path: '/',
        label: 'Overview',
        icon: <HomeOutlinedIcon />,
    },
    {
        key: 'account',
        path: '',
        label: 'Tài Khoản',
        icon: <AssignmentIndIcon />,
        children: [
            {
                key: 'expert',
                path: '/account/expert',
                label: 'Chuyên Gia',
                icon: <BadgeIcon />,
            },
        ],
    },
    {
        key: 'blog',
        path: '',
        label: 'Blog',
        icon: <LibraryBooksIcon />,
        children: [
            {
                key: 'all',
                path: '/blog/all',
                label: 'Chuyên Gia',
                icon: <StarsIcon />,
            },
        ],
    },
    {
        key: 'report',
        path: '/report',
        label: 'Báo Cáo',
        icon: <ReportIcon />,
    },
    {
        key: 'history',
        path: '/history',
        label: 'Lịch Sử',
        icon: <ManageHistoryIcon />,
    },
]

const Sidebar = ({ children }) => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <Router>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <S.AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            PlantMed
                        </Typography>
                    </Toolbar>
                </S.AppBar>
                <S.Drawer variant="permanent" open={open}>
                    <S.DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </S.DrawerHeader>
                    <Divider />
                    <List>
                        {menu.map((item) => (
                            <ListItemCustom
                                key={item.key}
                                menu={item}
                                openSidebar={open}
                                setOpenSidebar={setOpen}
                            />
                        ))}
                    </List>
                </S.Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <S.DrawerHeader />
                    {children}
                </Box>
            </Box>
        </Router>
    )
}

export default Sidebar
