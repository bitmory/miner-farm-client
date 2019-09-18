import request from '@/service/index'
export function AccountLogin (data) {
    return request({
        url: `api/Auth/authenticate`,
        method: 'post',
        loading:false,
        data
    })
}