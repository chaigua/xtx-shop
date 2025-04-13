import { defineStore } from "pinia"
import { loginAPI } from '@/apis/login'
import { mergeCartAPI } from "@/apis/cart"
import { useCartStore } from "./cartStore"
import {ref} from 'vue'
export const useUserStore = defineStore('user',()=>{
  const cartStore = useCartStore()
  const userInfo = ref({})
  const getUserInfo = async({account,password})=>{
    const res = await loginAPI({account,password})
    userInfo.value = res.result
    //登录成功后合并购物车列表
    await mergeCartAPI(cartStore.cartList.map(item=>{
      return {
        skuId:item.skuId,
        selected:item.selected,
        count:item.count
      }
    }))
    cartStore.getCartList()
  }
  const clearUserInfo = ()=>{
    userInfo.value = {}
    cartStore.clearCart()
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
