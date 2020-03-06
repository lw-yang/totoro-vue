import request from '../utils/request'

export function login(data) {
    return request({
        url: '/users/login/',
        method: 'post',
        data
    })
}

export function register(data) {
    return request({
        url: '/users/register/',
        method: 'post',
        data
    })
}

export function getUserByToken(data) {
    return request({
        url: '/users/?token=' + data,
        method: 'get',
    })
}

export function updateUser(data) {
    return request({
        url: '/users/',
        method: 'put',
        data
    })
}