import Client from 'rest/baseClient'

const http = new Client()

export const login = async (payload) => {
    return http.post('/admin/login', payload)
}
