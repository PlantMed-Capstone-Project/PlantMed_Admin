import { Button, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getBlockedList, unBlockUser } from 'rest/api/user'
import { capitalize } from 'utils/common'

export default function BlockedListAccount() {
    const [accounts, setAccounts] = useState([])
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const res = await getBlockedList()
            setAccounts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async (id, name) => {
        try {
            await unBlockUser(id)
            toast.success(`Account name "${name}" has been unblocked!`)
        } catch (error) {
            console.log(error)
            toast.error('Fail to unblock user')
        }
        navigate('/account/blocked')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Typography component={'h2'} variant="h4" mb={2}>
                Blocked List
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
                                bgColor="#e74c3c"
                                textColor="#fff"
                            />
                        ),
                    },
                    {
                        id: 'action',
                        label: 'Action',
                        render: ({ id, fullName }) => (
                            <Button
                                variant="contained"
                                color="warning"
                                onClick={() => handleClick(id, fullName)}
                            >
                                Unblock
                            </Button>
                        ),
                    },
                ]}
                rows={accounts}
            />
        </>
    )
}
