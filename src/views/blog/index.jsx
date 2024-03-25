import { Box, Button, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBlogs } from 'rest/api/blog'
import { capitalize } from 'utils/common'

export default function BlogView() {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const res = await getBlogs()
            setBlogs(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleClick = (id) => {
        navigate('/blog/' + id)
    }

    return (
        <Box>
            <Typography component={'h2'} variant="h4" mb={2}>
                Blogs
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
                                width="70px"
                                bgColor="#2ecc71"
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
                                onClick={() => handleClick(id)}
                            >
                                More
                            </Button>
                        ),
                    },
                ]}
                rows={blogs}
            />
        </Box>
    )
}
