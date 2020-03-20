import axios from 'axios'
import { message } from 'antd'

const request = axios.create({
  timeout: 30000
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(response => {
  const { data } = response
  if (!data.success) {
    message.error(data.message || '未知错误，请联系管理员')
    return Promise.reject(new Error(''))
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default request