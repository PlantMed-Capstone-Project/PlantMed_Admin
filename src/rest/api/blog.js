import Client from 'rest/baseClient'

const http = new Client()

export const getBlogs = async () => {
    return http.get(`/admin/blogs`)
}

export const getBlockList = async () => {
    return http.get(`/admin/blog/blocklist`)
}

export const getBlogById = async (id) => {
    return http.get(`/blogs/${id}`)
}

export const blockBlog = async (id) => {
    return http.patch(`/admin/blog/block?blogId=${id}`)
}

export const restoreBlog = async (id) => {
    return http.patch(`/admin/blog/restore?blogId=${id}`)
}
