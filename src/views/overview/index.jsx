import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined'
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined'
import { Box, Typography } from '@mui/material'
import BlogChart from './components/BlogChart/BlogChart'
import BlogChartInfor from './components/BlogChart/BlogChartInfor'
import CommentChart from './components/CommentChart/CommentChart'
import CirCleChart from './components/PieChart/PieChart'
import QuantityUser from './components/QuantityUser/QuantityUser'
import * as S from './index.styled'
import { getAllExperts, getAllUsers } from 'rest/api/user'
import { useEffect, useState } from 'react'
import { getBlogs } from 'rest/api/blog'
export default function Overview() {
    const [totalUser, setTotalUser] = useState(0)
    const [totalBlog, setTotalBlog] = useState(0)
    const [totalExpert, setTotalExpert] = useState(0)
    const [totalLike, setTotalLike] = useState(0)
    const [mostLikes, setMostLikes] = useState([])

    const getUsers = async () => {
        try {
            const res = await getAllUsers()
            const data = res.data
            setTotalUser(data.length)
        } catch (error) {
            console.log(error)
        }
    }
    const getExperts = async () => {
        try {
            const res = await getAllExperts()
            const data = res.data
            setTotalExpert(data.length)
        } catch (error) {
            console.log(error)
        }
    }
    const getBlogList = async () => {
        try {
            const res = await getBlogs()
            const data = res.data
            console.log(data)
            setTotalBlog(data.length)
            const total = [...data].reduce(
                (sum, curr) => sum + curr.totalLike,
                0
            )
            const most = [...data]
                .sort((a, b) => b.totalLike - a.totalLike)
                .slice(0, 5)
            setTotalLike(total)
            setMostLikes(most)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
        getExperts()
        getBlogList()
    }, [])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']
    const colorPieChart = ['#0088FE', '#00C49F', '#f0932b', '#FF8042', 'pink']

    const data = [
        {
            name: mostLikes[0]?.title,
            uv: mostLikes[0]?.totalLike,
        },
        {
            name: mostLikes[1]?.title,
            uv: mostLikes[1]?.totalLike,
        },
        {
            name: mostLikes[2]?.title,
            uv: mostLikes[2]?.totalLike,
        },
        {
            name: mostLikes[3]?.title,
            uv: mostLikes[3]?.totalLike,
        },
        {
            name: mostLikes[4]?.title,
            uv: mostLikes[4]?.totalLike,
        },
    ]

    const dataPlant = [
        { name: 'Bán Hạ Nam', value: 232 },
        { name: 'Nhân Trần', value: 110 },
        { name: 'Bạc Hà', value: 100 },
        { name: 'Bách Bộ', value: 122 },
    ]

    const dataComment = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: '25-29',
            uv: 26.69,
            pv: 4567,
            fill: '#83a6ed',
        },
        {
            name: '30-34',
            uv: 15.69,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: '35-39',
            uv: 8.22,
            pv: 9800,
            fill: '#82ca9d',
        },
        {
            name: '40-49',
            uv: 8.63,
            pv: 3908,
            fill: '#a4de6c',
        },
        {
            name: '50+',
            uv: 2.63,
            pv: 4800,
            fill: '#d0ed57',
        },
        {
            name: 'unknow',
            uv: 6.67,
            pv: 4800,
            fill: '#ffc658',
        },
    ]

    const countPlant = [
        {
            id: 1,
            number: 210,
            name: 'Total location',
            icon: (
                <AddLocationAltOutlinedIcon
                    sx={{
                        fontSize: '4rem',
                        color: '#507bce',
                        flex: '1',
                    }}
                />
            ),
        },
        {
            id: 2,
            number: 70,
            name: 'Total plant',

            icon: (
                <ForestOutlinedIcon
                    sx={{
                        fontSize: '4rem',
                        color: '#0ac382',
                        flex: '1',
                    }}
                />
            ),
        },
    ]

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <QuantityUser
                totalBlog={totalBlog}
                totalExpert={totalExpert}
                totalLike={totalLike}
                totalUser={totalUser}
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    marginTop: '2rem',
                    height: '25rem',
                    gap: '2rem',
                }}
            >
                <S.rowChartCtn boxShadow={5}>
                    <S.rowChartText>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                fontWeight: '600',
                            }}
                        >
                            Blogs with the most likes
                        </Typography>
                        <Typography variant="body2">
                            Includes the blog posts with the most likes taken
                            from the top 5, trusted and approved by experts.
                        </Typography>
                    </S.rowChartText>
                    <Box sx={{ width: '100%', display: 'flex', gap: '3rem' }}>
                        <BlogChart data={data} color={colors} />
                        <BlogChartInfor data={data} color={colors} />
                    </Box>
                </S.rowChartCtn>
                <S.ctnCircleChart boxShadow={5}>
                    <S.ctnCircleTxt>
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                fontWeight: '600',
                            }}
                        >
                            Top searching
                        </Typography>
                        <Typography variant="body2">
                            Shows us the types of plants that are being
                            evaluated and searched for the most up to the
                            present time.
                        </Typography>
                    </S.ctnCircleTxt>
                    <Box
                        sx={{
                            flex: '5',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <CirCleChart data={dataPlant} color={colorPieChart} />
                        <BlogChartInfor
                            data={dataPlant}
                            color={colorPieChart}
                            circle
                        />
                    </Box>
                </S.ctnCircleChart>
            </Box>
            <S.lastPhase>
                <Box
                    sx={{
                        width: 'calc(30% - 2rem)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2rem',
                    }}
                >
                    {countPlant.map((vl, idx) => (
                        <S.boxTotal boxShadow={5}>
                            {vl.icon}
                            <S.boxTxtTotal>
                                <Typography
                                    sx={{
                                        fontSize: '1.8rem',
                                        fontWeight: '800',
                                        color:
                                            idx === 0 ? '#507bce' : '#0ac382',
                                    }}
                                >
                                    {vl.number}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: '1rem' }}
                                >
                                    {vl.name}
                                </Typography>
                            </S.boxTxtTotal>
                            <S.ctnTotalLine idx={idx}></S.ctnTotalLine>
                        </S.boxTotal>
                    ))}
                </Box>
                <Box
                    boxShadow={5}
                    sx={{
                        width: '70%',
                        borderRadius: '0.625rem',
                        display: 'flex',
                    }}
                >
                    <CommentChart data={dataComment} />
                    <Box
                        sx={{
                            height: '100%',
                            width: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '1rem',
                                fontWeight: '600',
                            }}
                        >
                            Highly interactive posts
                        </Typography>
                        <Typography variant="body2">
                            Along with likes, comments are also equally good.
                        </Typography>
                    </Box>
                </Box>
            </S.lastPhase>
        </Box>
    )
}
