import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import MuiAppBar from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'
import { Box } from '@mui/material'

export const Nav = styled(NavLink)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    '&. MuiListItemIcon-root': {
        paddingLeft: theme.spacing(1),
    },
    '&.active > li ': {
        backgroundColor: '#F1F1F1',
        width: '100%',
        minHeight: '40px',
        borderRadius: theme.spacing(1),
    },
}))

const drawerWidth = 240

export const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

export const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})

export const DrawerHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}))

export const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}))

export const SideBar = styled(Box)(({ theme }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    width: `${drawerWidth}px`,
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#EDF2F7',
}))

export const Main = styled(Box)({
    width: '100%',
})
