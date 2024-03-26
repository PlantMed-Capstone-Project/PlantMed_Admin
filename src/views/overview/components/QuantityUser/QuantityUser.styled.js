import { Box, Typography, styled } from '@mui/material'

export const likedBlogContainer = styled(Box)(() => ({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0.625rem',
}))

export const boxLine = styled(Typography)(({ idx }) => ({
    fontSize: '1.8rem',
    fontWeight: '800',
    color:
        idx === 0
            ? '#fe9568'
            : idx === 1
            ? '#0ac382'
            : idx === 2
            ? '#fe5d70'
            : '#01aaad',
    flex: '3',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1rem',
}))

export const boxIcon = styled(Box)(() => ({
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const boxTitle = styled(Box)(({ idx }) => ({
    flex: '1',
    backgroundColor:
        idx === 0
            ? '#fe9568'
            : idx === 1
            ? '#0ac382'
            : idx === 2
            ? '#fe5d70'
            : '#01aaad',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: '0.625rem',
    borderBottomRightRadius: '0.625rem',
}))
