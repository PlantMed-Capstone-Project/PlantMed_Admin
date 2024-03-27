import { Box, Stack, styled } from '@mui/material'

export const Background = styled(Box)(() => ({
    background: 'linear-gradient(to right, #1d976c, #93f9b9)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

export const container = styled(Stack)(() => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}))
