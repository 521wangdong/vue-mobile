import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/device/info/list',
        method: 'get',
        params
    })
}