import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import Content from 'components/Content'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { blockBlog, getBlogById } from 'rest/api/blog'

export default function DetailBlog() {
    const { id } = useParams()
    const [content, setContent] = useState({})
    const navigate = useNavigate()

    const fetchById = async () => {
        try {
            const res = await getBlogById(id)
            setContent(res.data)
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
            toast.success('The block has been blocked!!')
        } catch (error) {
            console.log(error)
            toast.error('Fail to block blog')
        }
        navigate('/blog/all')
    }

    return (
        <>
            <Typography component={'h2'} variant="h4" mb={2}>
                Blog Detail
            </Typography>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Content {...content} />
                {/* Button section start */}
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    spacing={2}
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
                        variant="outlined"
                        color="info"
                        onClick={() => navigate('/blog/all')}
                    >
                        Back
                    </Button>
                </Stack>
            </Paper>
        </>
    )
}
