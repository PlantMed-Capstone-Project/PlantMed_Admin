import { Box, Typography } from '@mui/material'
import React from 'react'

function BlogChartInfor({ data, color, circle = false }) {
    return (
        <Box
            sx={{
                width: circle ? '100%%' : '35%',
                display: 'flex',
                flexDirection: circle ? 'row' : 'column',
                gap: '1rem',
                pt: circle ? '0' : '5rem',
                height: circle ? ' 40%' : 'auto',
                justifyContent: circle ? 'space-evenly' : '',
            }}
        >
            {data.map((vl, idx) => (
                <Box
                    sx={{
                        width: circle ? 'auto' : '100%',
                        display: 'flex',
                        height: circle ? 'auto' : '1rem',
                        gap: '1rem',
                        flexDirection: circle ? 'column' : 'row',
                        alignItems: circle ? 'center' : 'none',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: color[idx % color.length],
                            flex: circle ? '' : '1',
                            borderRadius: '0.625rem',
                            height: circle ? '2rem' : 'none',
                            width: circle ? '2rem' : 'none',
                        }}
                    ></Box>
                    <Typography
                        variant="body2"
                        sx={{
                            flex: circle ? '' : '3',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            fontWeight: '600',
                        }}
                    >
                        {vl.name}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default BlogChartInfor
