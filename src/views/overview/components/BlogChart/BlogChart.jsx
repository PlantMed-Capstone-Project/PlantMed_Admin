import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts'

function BlogChart({ data, color }) {
    return (
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 50,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Bar dataKey="uv" fill="#8884d8" label={{ position: 'top' }}>
                {data.map((_, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={color[index % color.length]}
                    />
                ))}
            </Bar>
        </BarChart>
    )
}

export default BlogChart
