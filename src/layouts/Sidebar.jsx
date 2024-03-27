import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import BadgeIcon from '@mui/icons-material/Badge'
import BlockIcon from '@mui/icons-material/Block'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FactCheckIcon from '@mui/icons-material/FactCheck'
// import HistoryIcon from '@mui/icons-material/History'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import MenuIcon from '@mui/icons-material/Menu'
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import ReportIcon from '@mui/icons-material/Report'
import StarsIcon from '@mui/icons-material/Stars'
import SmsFailedIcon from '@mui/icons-material/SmsFailed'
import AppsOutageIcon from '@mui/icons-material/AppsOutage'
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
        label: 'Account',
        icon: <AssignmentIndIcon />,
        children: [
            {
                key: 'expert',
                path: '/account/expert-pending',
                label: 'Expert',
                icon: <BadgeIcon />,
            },
            {
                key: 'users',
                path: '/account/users',
                label: 'All Users',
                icon: <RecentActorsIcon />,
            },
            {
                key: 'experts',
                path: '/account/experts',
                label: 'All Experts',
                icon: <FactCheckIcon />,
            },
            {
                key: 'blocked',
                path: '/account/blocked',
                label: 'Blocked List',
                icon: <PlaylistRemoveIcon />,
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
                label: 'Active',
                icon: <StarsIcon />,
            },
            {
                key: 'blocked',
                path: '/blog/blocked',
                label: 'Blocked',
                icon: <BlockIcon />,
            },
        ],
    },
    {
        key: 'report',
        path: '',
        label: 'Report',
        icon: <ReportIcon />,
        children: [
            {
                key: 'blog',
                path: '/report/blog',
                label: 'Blog',
                icon: <AppsOutageIcon />,
            },
            {
                key: 'comment',
                path: '/report/comment',
                label: 'Comment',
                icon: <SmsFailedIcon />,
            },
        ],
    },
    // {
    //     key: 'history',
    //     path: '/history',
    //     label: 'History',
    //     icon: <HistoryIcon />,
    // },
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
        <>
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
        </>
    )
}

export default Sidebar
