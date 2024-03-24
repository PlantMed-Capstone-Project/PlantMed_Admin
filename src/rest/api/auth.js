const { default: Client } = require('rest/baseClient');

const http = new Client()

export const login = async (payload) => {
  return http.post('/auth/login', payload)
}