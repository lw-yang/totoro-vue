import request from '../utils/request'

export function listCoupons(data) {
    return request({
        url: '/users/'+ data + '/coupons/',
        method: 'get',
    })
}