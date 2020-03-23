import request from '../utils/request'

export function listDailySpecial() {
    return request({
        url: '/ad/dailySpecial/',
        method: 'get',
    })
}

export function listDailyChoice() {
    return request({
        url: '/ad/dailyChoice/',
        method: 'get',
    })
}

