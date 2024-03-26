import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { deleteComment } from 'rest/api/comment'
import { getCommentList, solvedReport } from 'rest/api/report'
import { capitalize } from 'utils/common'

export const CommentReport = () => {
    const [comments, setComments] = useState([])
    const [emptyMessage, setEmptyMessage] = useState('')

    const fetchData = async () => {
        try {
            const res = await getCommentList()
            setComments(res.data)
        } catch (error) {
            setEmptyMessage(error.response.data.message)
            setComments([])
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (commentId, reportId) => {
        try {
            await solvedReport(reportId)
            await deleteComment(commentId)
            fetchData()
            toast.success('Delete comment succesfully!')
        } catch (error) {
            console.log(error)
            toast.error('Fail to delete comment!')
        }
    }

    const handleReject = async (id) => {
        try {
            await solvedReport(id)
            fetchData()
            toast.success('Skip comment!')
        } catch (error) {
            console.log(error)
            toast.error('Fail to skip comment!')
        }
    }

    return (
        <Box>
            <Typography component={'h2'} variant="h4" mb={2}>
                Report Comment List
            </Typography>
            <TableCustom
                columns={[
                    {
                        id: 'author',
                        label: 'Author',
                        minWidth: 170,
                        render: ({ author }) => (
                            <Typography>{author}</Typography>
                        ),
                    },
                    {
                        id: 'commentContent',
                        label: 'Comment',
                        minWidth: 170,
                        render: ({ commentContent }) => (
                            <Typography>{commentContent}</Typography>
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
                        label: 'Actions',
                        render: ({ commentId, id }) => (
                            <Stack
                                direction="row"
                                divider={
                                    <Divider orientation="vertical" flexItem />
                                }
                                spacing={1}
                            >
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(commentId, id)}
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="contained"
                                    color="info"
                                    onClick={() => handleReject(id)}
                                >
                                    Skip
                                </Button>
                            </Stack>
                        ),
                    },
                ]}
                rows={comments}
                emptyMessage={emptyMessage}
            />
        </Box>
    )
}
