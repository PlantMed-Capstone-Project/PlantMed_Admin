import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Box, Typography } from '@mui/material'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined'
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import * as S from './QuantityUser.styled'

function QuantityUser({ totalUser, totalExpert, totalBlog, totalLike }) {
    const dataQuantity = [
        {
            id: 1,
            icon: <PersonOutlineOutlinedIcon sx={{ fontSize: '3rem' }} />,
            quantity: totalUser ?? 123,
            name: 'User',
        },
        {
            id: 2,
            icon: <AssignmentIndOutlinedIcon sx={{ fontSize: '3rem' }} />,
            quantity: totalExpert ?? 123,
            name: 'Expert',
        },
        {
            id: 1,
            icon: <BookOutlinedIcon sx={{ fontSize: '3rem' }} />,
            quantity: totalBlog ?? 123,
            name: 'Blog',
        },
        {
            id: 1,
            icon: <ThumbUpAltOutlinedIcon sx={{ fontSize: '3rem' }} />,
            quantity: totalLike ?? 123,
            name: 'Total Like',
        },
    ]

    return (
        <Box
            sx={{
                width: '100%',
                height: '9rem',
                display: 'flex',
                borderRadius: '0.625rem',
                gap: '1rem',
            }}
        >
            {dataQuantity.map((vl, idx) => (
                <S.likedBlogContainer key={idx} boxShadow={5}>
                    <Box
                        sx={{
                            display: 'flex',
                            flex: '3',
                        }}
                    >
                        <S.boxLine idx={idx}>{vl.quantity}</S.boxLine>
                        <S.boxIcon>{vl.icon}</S.boxIcon>
                    </Box>
                    <S.boxTitle idx={idx}>
                        <Typography
                            sx={{
                                fontSize: '1.2rem',
                                fontWeight: '600',
                                color: '#FFF',
                            }}
                        >
                            {vl.name}
                        </Typography>
                    </S.boxTitle>
                </S.likedBlogContainer>
            ))}
        </Box>
    )
}

export default QuantityUser
