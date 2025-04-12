import axios from "axios"
import { useUserStore } from '@/stores/user'
import router from "@/router"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
const instance= axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})

// axios请求拦截器
instance.interceptors.request.use(config => {
  const userStore=useUserStore()
  const token=userStore.userInfo.token
  if(token){
    config.headers.Authorization=`Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
instance.interceptors.response.use(res => res.data, e => {
  //统一错误提示
  console.log(e)
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401 token失效
  if(e.response.status===401){
    const userStore=useUserStore()
    userStore.clearUserInfo()
    router.push('/login')
  }
  return Promise.reject(e)
})

export default instance
