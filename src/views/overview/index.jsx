import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined'
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined'
import { Box, Typography } from '@mui/material'
import BlogChart from './components/BlogChart/BlogChart'
import BlogChartInfor from './components/BlogChart/BlogChartInfor'
import CommentChart from './components/CommentChart/CommentChart'
import CirCleChart from './components/PieChart/PieChart'
import QuantityUser from './components/QuantityUser/QuantityUser'
import * as S from './index.styled'
export default function Overview() {
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink']
    const colorPieChart = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'pink']

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
    ]

    const dataPlant = [
        { name: 'Group A', value: 1 },
        { name: 'Group B', value: 1 },
        { name: 'Group C', value: 1 },
        { name: 'Group D', value: 1 },
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
            <QuantityUser />
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
