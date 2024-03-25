import { styled, TextField } from '@mui/material'

export const Input = styled(TextField)(() => ({
    backgroundColor: '#F4FFEB',
    '& .MuiInput-root': {
        color: '#000',
        fontWeight: 'bold',
        // Bottom border
        '&:before': {
            borderColor: '#69AD28',
            borderWidth: '2px',
        },
        // Border on focus
        '&:after': {
            borderColor: '#214400',
            borderWidth: '3px',
        },
    },
}))
