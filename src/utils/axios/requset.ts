import axios from "axios";
const request = axios.create({
    baseURL:'/api',
    timeout:5000
})

request.interceptors.response.use((config)=>{
    //config:请求响应拦截器回调注入配置对象要返回
    return config
})

request.interceptors.response.use((response)=>{

    return response
},(error)=>{
    return Promise.reject(new Error(error.message))
})


export default request