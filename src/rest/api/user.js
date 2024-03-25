import Client from 'rest/baseClient'

const http = new Client()

export const getExpertPending = async () => {
    return http.get('/admin/expertsPending')
}

export const getExpertPendingById = async (id) => {
    return http.get(`/admin/expert/${id}`)
}

export const getAllUsers = async () => {
    return http.get('/admin/users')
}

export const getAllExperts = async () => {
    return http.get('/admin/experts')
}

export const getBlockedList = async () => {
    return http.get('/admin/account/blockedList')
}

export const blockUser = async (id) => {
    return http.patch(`/admin/user/block?userId=${id}`)
}

export const unBlockUser = async (id) => {
    return http.patch(`/admin/user/unblock?userId=${id}`)
}

export const acceptExpert = async (id) => {
    return http.patch(`/admin/user/accept?userId=${id}`)
}

export const rejectExpert = async (id) => {
    return http.patch(`/admin/user/reject?userId=${id}`)
}
