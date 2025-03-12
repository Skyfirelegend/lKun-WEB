import axios from "axios";

const request axios.create({
    baseURL: 'https://www.lkun.com.cn/',
    timeout: 5000
})

// 请求拦截器，请求发送之前做拦截
request.interceptors.request.use((config) => {
    return config
}, (error) =》 {
    return Promise.reject(error)
})


// 响应拦截器：响应返回到客户端之前，拦截
request.interceptors.response.use((response) => {
    return response.data
}, (error) =》 {
    return Promise.reject(error)
})

export { request }
