import { Divider, Paper, Stack, Typography, Link } from '@mui/material'
import { useEffect, useState } from 'react'

// title = '',
// author,
// fullName,
// email,
// certificates = [],
// content,
export default function Content(data) {
    const [dataContent, setDataContent] = useState({})

    useEffect(() => {
        setDataContent(data)
    }, [data])

    return (
        <>
            {dataContent?.certificates ? (
                <>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        sx={{ mb: 2 }}
                    >
                        <Typography>{dataContent?.fullName}</Typography>
                        <Typography>{dataContent?.email}</Typography>
                    </Stack>
                    <Typography variant="h6" mb={2}>
                        There are expert's certificates (PDF link):
                    </Typography>
                    <Stack
                        direction="column"
                        divider={<Divider orientation="horizontal" flexItem />}
                        spacing={2}
                        sx={{ mb: 2 }}
                    >
                        {dataContent?.certificates.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.link}
                                underline="none"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {`Certificate ${idx + 1}`}
                            </Link>
                        ))}
                    </Stack>
                </>
            ) : (
                <>
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        sx={{ mb: 2 }}
                    >
                        <Typography variant="h5">
                            {dataContent?.title}
                        </Typography>
                        <Typography variant="h5">
                            {dataContent?.user?.name}
                        </Typography>
                    </Stack>
                    <Paper elevation={2} sx={{ p: 2 }}>
                        <Typography
                            dangerouslySetInnerHTML={{
                                __html: dataContent?.content,
                            }}
                        />
                    </Paper>
                </>
            )}
        </>
    )
}
