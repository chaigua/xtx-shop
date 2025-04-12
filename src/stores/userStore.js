import { defineStore } from "pinia"
import { loginAPI } from '@/apis/login'
import {ref} from 'vue'
export const useUserStore = defineStore('user',()=>{
  const userInfo = ref({})
  const getUserInfo = async({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result
  }
  const clearUserInfo = ()=>{
    userInfo.value = {}
  }
  return{
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
{
  persist: true,
}
)
