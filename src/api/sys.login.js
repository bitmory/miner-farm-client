import request from '@/service/index'
export function AccountLogin (params) {
    return request({
        url: `api/User/Login`,
        method: 'post',
        loading:false,
        params
    })
}