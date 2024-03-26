import { Button, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { blockUser, getAllUsers } from 'rest/api/user'
import { capitalize } from 'utils/common'

export default function UserView() {
    const [users, setUsers] = useState([])
    const [emptyMessage, setEmptyMessage] = useState('')

    const fetchData = async () => {
        try {
            const res = await getAllUsers()
            setUsers(res.data)
        } catch (error) {
            setEmptyMessage(error.response.data.message)
            setUsers([])
        }
    }

    const handleClick = async (id, name) => {
        try {
            await blockUser(id)
            fetchData()
            toast.success(`User name "${name}" has been blocked!`)
        } catch (error) {
            console.log(error)
            toast.error('Fail to block user')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Typography component={'h2'} variant="h4" mb={2}>
                All Users
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
                                width="70px"
                                bgColor="#2ecc71"
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
                                color="error"
                                onClick={() => handleClick(id, fullName)}
                            >
                                Block
                            </Button>
                        ),
                    },
                ]}
                rows={users}
                emptyMessage={emptyMessage}
            />
        </>
    )
}
