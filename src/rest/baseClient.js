import axios from 'axios'
import { ACCESS_TOKEN } from 'constant'
import { readCookie } from 'utils'

export default class Client {
    constructor() {
        this.baseUrl = process.env.REACT_APP_ADMIN_URL
        this.client = axios.create({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'ngrok-skip-browser-warning': '69420',
            },
        })

        this.client.interceptors.request.use(async (config) => {
            let access_token = readCookie(ACCESS_TOKEN)

            config.headers.Authorization = `Bearer ${access_token}`
            return config
        })
    }

    async get(url, payload) {
        let res = {}
        try {
            res = await this.client.get(url, payload || {})
        } catch (e) {
            throw e
        }
        return res
    }

    async post(url, payload, config) {
        let res = {}
        try {
            res = await this.client.post(url, payload || {}, config)
        } catch (e) {
            throw e
        }
        return res
    }

    async put(url, payload) {
        let res = {}
        try {
            res = await this.client.put(url, payload || {})
        } catch (e) {
            throw e
        }
        return res
    }

    async delete(url, payload) {
        let res = {}
        try {
            res = await this.client.delete(url, payload || {})
        } catch (e) {
            throw e
        }
        return res
    }

    async patch(url, payload, config) {
        let res = {}
        try {
            res = await this.client.patch(url, payload || {}, config)
        } catch (e) {
            throw e
        }
        return res
    }
}
