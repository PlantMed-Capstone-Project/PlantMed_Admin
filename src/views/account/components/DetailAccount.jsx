import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import Content from 'components/Content'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { acceptExpert, getExpertPendingById, rejectExpert } from 'rest/api/user'

export default function DetailAccount() {
    const { id } = useParams()
    const [content, setContent] = useState({})
    const navigate = useNavigate()

    const fetchById = async () => {
        try {
            const res = await getExpertPendingById(id)
            setContent(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAccept = async (id, name) => {
        try {
            await acceptExpert(id)
            toast.success(`Accept expert "${name}" successfully!`)
        } catch (error) {
            toast.error('Fail to accept acocunt!')
        }
        navigate('/account/expert-pending')
    }

    const handleReject = async (id, name) => {
        try {
            await rejectExpert(id)
            toast.error(`Reject expert "${name}"!!`)
        } catch (error) {
            toast.error('Fail to accept acocunt!')
        }
        navigate('/account/expert-pending')
    }

    return (
        <>
            <Typography component={'h2'} variant="h4" mb={2}>
                Account Detail
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
                        color="success"
                        onClick={() => handleAccept(id, content.fullName)}
                    >
                        Accept
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleReject(id, content.fullName)}
                    >
                        Reject
                    </Button>
                </Stack>
            </Paper>
        </>
    )
}
