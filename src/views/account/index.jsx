import { Button, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getExpertPending } from 'rest/api/user'
import { capitalize } from 'utils/common'

export default function AccountView() {
    const [experts, setExperts] = useState([])
    const [emptyMessage, setEmptyMessage] = useState('')
    const navigate = useNavigate()

    const fetchexperts = async () => {
        try {
            const res = await getExpertPending()
            setExperts(res.data)
        } catch (error) {
            setEmptyMessage(error.response.data.message)
        }
    }

    const handleClick = (id) => {
        navigate('/account/expert-pending/' + id)
    }

    useEffect(() => {
        fetchexperts()
    }, [])

    return (
        <>
            <Typography component={'h2'} variant="h4" mb={2}>
                Pending Accounts
            </Typography>
            <TableCustom
                columns={[
                    {
                        id: 'email',
                        label: 'Email',
                        minWidth: 170,
                        render: ({ email }) => <Typography>{email}</Typography>,
                    },
                    {
                        id: 'fullName',
                        label: 'Name',
                        minWidth: 170,
                        render: ({ fullName }) => (
                            <Typography>{fullName}</Typography>
                        ),
                    },
                    {
                        id: 'role',
                        label: 'Role',
                        minWidth: 170,
                        render: ({ role }) => <Typography>{role}</Typography>,
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
                rows={experts}
                emptyMessage={emptyMessage}
            />
        </>
    )
}
