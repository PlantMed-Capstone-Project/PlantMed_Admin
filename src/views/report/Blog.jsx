import { Box, Button, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBlogList } from 'rest/api/report'
import { capitalize } from 'utils/common'

export const BlogReport = () => {
    const [blogs, setBlogs] = useState([])
    const [emptyMessage, setEmptyMessage] = useState('')
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const res = await getBlogList()
            setBlogs(res.data)
        } catch (error) {
            setEmptyMessage(error.response.data.message)
            setBlogs([])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleRoute = (blogId, reportId) => {
        navigate('/report/blog/' + blogId + '/' + reportId)
    }

    return (
        <Box>
            <Typography component={'h2'} variant="h4" mb={2}>
                Report Blog List
            </Typography>
            <TableCustom
                columns={[
                    {
                        id: 'blogTitle',
                        label: 'Title',
                        minWidth: 170,
                        render: ({ blogTitle }) => (
                            <Typography>{blogTitle}</Typography>
                        ),
                    },
                    {
                        id: 'author',
                        label: 'Author',
                        minWidth: 170,
                        render: ({ author }) => (
                            <Typography>{author}</Typography>
                        ),
                    },
                    {
                        id: 'annunciator',
                        label: 'Annunciator',
                        minWidth: 170,
                        render: ({ annunciator }) => (
                            <Typography>{annunciator}</Typography>
                        ),
                    },
                    {
                        id: 'reportCategory',
                        label: 'Description',
                        minWidth: 170,
                        render: ({ reportCategory }) => (
                            <Typography>{reportCategory}</Typography>
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
                                bgColor="#95a5a6"
                                textColor="#fff"
                            />
                        ),
                    },
                    {
                        id: 'action',
                        label: 'Action',
                        render: ({ blogId, id }) => (
                            <Button
                                variant="outlined"
                                color="info"
                                onClick={() => handleRoute(blogId, id)}
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
