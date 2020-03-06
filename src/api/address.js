import request from '../utils/request'

export function listAddresses(data) {
    return request({
        url: '/users/'+ data + '/addresses/',
        method: 'get',
    })
}

export function addAddress(id, data) {
    return request({
        url: '/users/'+ id + '/addresses/',
        method: 'post',
        data: data
    })
}

export function updateAddress(userId, addressId, data) {
    return request({
        url: '/users/'+ userId + '/addresses/' + addressId + '/',
        method: 'put',
        data: data
    })
}

export function deleteAddress(userId, addressId) {
    return request({
        url: '/users/'+ userId + '/addresses/' + addressId + '/',
        method: 'delete',
    })
}