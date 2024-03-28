import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import Content from 'components/Content'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { blockBlog, getBlogById } from 'rest/api/blog'
import { solvedReport } from 'rest/api/report'

export const DetailReport = () => {
    const { id, reportId } = useParams()
    const [data, setData] = useState({})
    const navigate = useNavigate()

    const fetchById = async () => {
        try {
            const res = await getBlogById(id)
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = async (id) => {
        try {
            await blockBlog(id)
            await solvedReport(reportId)
            toast.success('The blog has been blocked!!')
            navigate('/report/blog')
        } catch (error) {
            console.log(error)
            toast.error('Fail to block blog')
        }
    }

    const handleSkip = async () => {
        try {
            await solvedReport(reportId)
            toast.success('Skip blog!')
            navigate('/report/blog')
        } catch (error) {
            console.log(error)
            toast.error('Fail to skip blog!')
        }
    }

    return (
        <>
            <Typography component={'h2'} variant="h4" mb={2}>
                Blog Detail
            </Typography>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Content {...data} />
                {/* Button section start */}
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    spacing={1}
                    divider={<Divider orientation="vertical" flexItem />}
                    sx={{ mt: 2 }}
                >
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleClick(id)}
                    >
                        Block
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={handleSkip}
                    >
                        Skip
                    </Button>
                    <Button
                        variant="outlined"
                        color="info"
                        onClick={() => navigate('/report/blog')}
                    >
                        Back
                    </Button>
                </Stack>
            </Paper>
        </>
    )
}
