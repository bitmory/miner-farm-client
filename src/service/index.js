
import axios from 'axios'
import { Message, Loading } from 'element-ui'
import qs from 'qs'
// 创建一个错误
function errorCreate (msg) {
    const error = new Error(msg)
    errorLog(error)
    throw error
}

// 记录和显示错误
function errorLog (error) {
    // 显示提示
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
}

// 创建一个 axios 实例
const service = axios.create({
    baseURL: "http://212.64.74.201:8081/",
    timeout: 5000// 请求超时时间
    // paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        /** 配置全屏加载 */
        if (config.loading !== false) {
            const { loading } = config
            const is_num = typeof (config.loading) === 'number'
            if (is_num) config.loading_num = true
            config.loading = Loading.service({
                lock: true,
                background: `rgba(0, 0, 0, ${is_num ? loading : '0'})`,
                spinner: 'el-icon-loading'
            })
        }
        // 在请求发送之前做一些处理
        // const token = localStorage.getItem('userId')
        // const userId = localStorage.getItem('userId')
        // const userType = localStorage.getItem('userType')
        // const token = util.cookies.get('token')
        config.headers['token'] = localStorage.getItem('userType') + ',' + localStorage.getItem('userId') + ',' + localStorage.getItem('token')
        /** 进行参数序列化 */
        // if ((config.method === 'post') && config.headers['Content-Type'] !== 'application/json') {
        //     config.data = qs.stringify(config.data, { arrayFormat: 'repeat' })
        // }
        // debugger
        return config
    },
    error => {
        // 发送失败
        console.log(error)
        Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    async  response => {
        await closeLoading(response)
        // dataAxios 是 axios 返回数据中的 data
        const dataAxios = response.data
        // 这个状态码是和后端约定的
        const { status } = dataAxios
        console.log(response)
        if(response.data.status == 401){
            // alert("您的登录已过期，请重新登录！")
            setTimeout(function(){
                alert("您的登录已过期，请重新登录！")
                window.location.href='/updist'
                // }
                // })
            },1000)
        }
        // 根据 code 进行判断
        switch (status) {
            case 200:
                // if(dataAxios.msg) {
                //     Message({message: dataAxios.msg, type: 'success'})
                // }
                // else {
                //     Message({message: '查询成功', type: 'success'})
                // }
                break
            default:
                // 不是正确的 status
                if(dataAxios.msg) {
                    errorCreate(`${dataAxios.msg}`)
                }
                break
        }
        return response.data
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400: error.message = '请求错误'; break
                case 401: error.message = '未授权，请登录'; break
                case 403: error.message = '拒绝访问'; break
                case 404: error.message = `请求地址出错: ${error.response.config.url}`; break
                case 408: error.message = '请求超时'; break
                case 500: error.message = '服务器内部错误'; break
                case 501: error.message = '服务未实现'; break
                case 502: error.message = '网关错误'; break
                case 503: error.message = '服务不可用'; break
                case 504: error.message = '网关超时'; break
                case 505: error.message = 'HTTP版本不受支持'; break
                default: break
            }
        }
        errorLog(error)
        return Promise.reject(error)
    }
)
/**
 * 关闭全局加载
 * 延迟200毫秒关闭，以免晃眼睛
 * @param target
 */
const closeLoading = (target) => {
    const { loading, loading_num } = target.config
    if (!loading) return true
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            target.config.loading.close()
            resolve()
        }, loading_num ? 0 : 200)
    })
}

export default service
