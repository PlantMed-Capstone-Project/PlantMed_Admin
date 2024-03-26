import Client from 'rest/baseClient'

const http = new Client()

export const getBlogList = async () => {
    return http.get('/reports/blogs')
}

export const getCommentList = async () => {
    return http.get('/reports/comments')
}

export const solvedReport = async (id) => {
    return http.patch(`/reports/solve?id=${id}`)
}
