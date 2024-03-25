import { Button, Typography } from '@mui/material'
import ChipCustom from 'components/ChipTag'
import TableCustom from 'components/Table'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { blockUser, getAllExperts } from 'rest/api/user'
import { capitalize } from 'utils/common'

export default function ExpertView() {
    const [experts, setExperts] = useState([])
    const navigate = useNavigate()

    const fetchData = async () => {
        try {
            const res = await getAllExperts()
            setExperts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async (id, name) => {
        try {
            await blockUser(id)
            toast.success(`Expert name "${name}" has been blocked!`)
        } catch (error) {
            console.log(error)
            toast.error('Fail to block expert')
        }
        navigate('/account/experts')
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Typography component={'h2'} variant="h4" mb={2}>
                All Experts
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
                rows={experts}
            />
        </>
    )
}
