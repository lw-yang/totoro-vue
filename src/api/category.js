import request from '../utils/request'

export function listCategories(query, parentId) {
    let url = ''
    if (query != null){
        url = '/categories/?q=' + query
    }else if (parentId != null){
        url = '/categories/?parentId=' + parentId
    }else {
        url = '/categories/'
    }
    return request({
        url: url,
        method: 'get',
    })
}