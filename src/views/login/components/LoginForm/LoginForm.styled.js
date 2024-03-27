import { Box, Button, Typography, styled } from '@mui/material'
import logo from 'images/logo.png'

export const iconStyle = {
    color: '#69AD28',
    fontSize: '2rem',
}

export const Form = styled(Box)(() => ({
    backgroundColor: '#F4FFEB',
    width: '25.125rem',
    height: '33rem',
    borderRadius: '0.625rem',
    boxShadow: '0px 0px 3px 0px rgba(33, 68, 0, 0.30)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2.75rem',
}))

export const signinTitle = styled(Typography)(() => ({
    fontSize: '2.5rem',
    fontWeight: '600',
    color: '#468c04',
    textTransform: 'inherit',
}))

export const button = styled(Button)(() => ({
    background:
        'linear-gradient(30deg, rgba(170,247,106,1) 15%, rgba(61,232,170,1) 60%)',
    borderRadius: '0.6rem',
    width: '18rem',
    color: '#214400',
    fontWeight: '400',
}))

export const containerInput = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.13rem',
    width: '100%',
    alignItems: 'center',
}))

export const inputPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '17.875rem',
    gap: '1.12rem',
}))

export const navPlace = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.69rem',
}))

export const Logo = styled(Box)(() => ({
    backgroundImage: `url(${logo})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    width: '9rem',
    height: '5rem',
}))

export const Note = styled(Typography)(() => ({
    position: 'absolute',
    top: '16rem',
    left: '51rem',
    fontSize: '1.5rem',
    fontWeight: '200',
    fontStyle: 'italic',
    color: '#FFF',
}))
