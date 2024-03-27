import { Buffer } from 'buffer'

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const parseJwt = (token) => {
    return token
        ? JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
        : ''
}
