import Client from 'rest/baseClient'

const http = new Client()

export const deleteComment = async (id) => {
    return http.patch('/comments/comment/' + id)
}
