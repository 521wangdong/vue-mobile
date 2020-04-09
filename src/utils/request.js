import axios from 'axios'


const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

//请求拦截器
service.interceptors.request.use(
    config => {

        return config
    },
    error => {

        console.log(error) // for debug
        return Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data


        return res

    },
    error => {
        console.log('err' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service