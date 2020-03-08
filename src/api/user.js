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
        url: '/users/' + data,
        method: 'get',
    })
}

export function updateUser(data, id) {
    return request({
        url: '/users/' + id,
        method: 'put',
        data
    })
}