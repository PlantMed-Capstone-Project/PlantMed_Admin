function createCookie(name, value) {
    let date = new Date()
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000)
    let expires = ';expires=' + date.toGMTString()
    document.cookie = name + '=' + value + expires + '; path=/'
}

function readCookie(name) {
    if (typeof document === 'undefined') return null
    let nameEQ = name + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length)
        }
    }
    return null
}

function clearCookie(name) {
    createCookie(name, '', -1)
}

export { clearCookie, createCookie, readCookie }
