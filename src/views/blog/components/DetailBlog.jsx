import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import Content from 'components/Content'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { blockBlog, getBlogById, restoreBlog } from 'rest/api/blog'

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
            navigate('/blog/all')
        } catch (error) {
            console.log(error)
            toast.error('Fail to block blog')
        }
    }

    const handleRestore = async (id) => {
        try {
            await restoreBlog(id)
            toast.success('Restore blog successful!')
            navigate('/blog/all')
        } catch (error) {
            console.log(error)
            toast.error('Fail to restore blog!')
        }
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
                    {content?.status === 'Blocked   ' ? (
                        <Button
                            variant="contained"
                            color="success"
                            onClick={() => handleRestore(id)}
                        >
                            Restore
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            color="error"
                            onClick={() => handleClick(id)}
                        >
                            Block
                        </Button>
                    )}

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
