import { Box, Button, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBlockList } from 'rest/api/blog'
import { capitalize } from 'utils/common'

export default function BlockedListBlog() {
    const [blogs, setBlogs] = useState([])
    const [emptyMessage, setEmptyMessage] = useState('')
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const res = await getBlockList()
            setBlogs(res.data)
        } catch (error) {
            setEmptyMessage(error.response.data.message)
            setBlogs([])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleRoute = (id) => {
        navigate('/blog/' + id)
    }

    return (
        <Box>
            <Typography component={'h2'} variant="h4" mb={2}>
                Blocked List of Blogs
            </Typography>
            <TableCustom
                columns={[
                    {
                        id: 'title',
                        label: 'Title',
                        minWidth: 170,
                        render: ({ title }) => <Typography>{title}</Typography>,
                    },
                    {
                        id: 'author',
                        label: 'Author',
                        minWidth: 170,
                        render: ({ user }) => (
                            <Typography>{user.name}</Typography>
                        ),
                    },
                    {
                        id: 'status',
                        label: 'Status',
                        minWidth: 170,
                        render: ({ status }) => (
                            <ChipCustom
                                label={capitalize(status)}
                                width="90px"
                                bgColor="#e74c3c"
                                textColor="#fff"
                            />
                        ),
                    },
                    {
                        id: 'action',
                        label: 'Action',
                        render: ({ id }) => (
                            <Button
                                variant="outlined"
                                color="info"
                                onClick={() => handleRoute(id)}
                            >
                                Read
                            </Button>
                        ),
                    },
                ]}
                rows={blogs}
                emptyMessage={emptyMessage}
            />
        </Box>
    )
}
