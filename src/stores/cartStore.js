import { defineStore } from "pinia"
import {ref,computed} from 'vue'
import { useUserStore } from "./userStore"
import { insertCartAPI,getNewCartAPI,delCartAPI } from "@/apis/cart"
export const useCartStore = defineStore('cart',()=>{
  const cartList = ref([])
  const userStore = useUserStore()
  //重新渲染购物车action
  const getCartList = async ()=>{
    const res = await getNewCartAPI()
    cartList.value = res.result
  }
  //登录与非登录
  const isLogin = computed(()=>{
    return userStore.userInfo.token
  })


  const addCart = async (goods)=>{
    const {skuId,count} = goods
    if (isLogin.value){
      //如果登录了就获取购物车列表
      await insertCartAPI({skuId,count})
      await getCartList()
      }else{
        const cart = cartList.value.find(item=>item.skuId === goods.skuId)
        if (cart){
          cart.count++
        }else{
          cartList.value.push(goods)
        }


  }}

  const delCart = async(id)=>{
    if (isLogin.value){
      await delCartAPI([id])
      await getCartList()
    }else{
      cartList.value = cartList.value.filter(item=>item.skuId !== id)
    }
  }
//单选回调
  const selectedCart = (skuId,selected)=>{
    const item = cartList.value.find(item=>item.skuId === skuId)
    if (item){
      item.selected = selected
    }
  }
  //全选
  const selectAll = (selected)=>{
    cartList.value.forEach(item=>item.selected = selected)
  }



  //计算属性

 //是否全选
 const isAll = computed(()=>{
  return cartList.value.every(item=>item.selected)
})
  //总数
  const total = computed(()=>{
    return cartList.value.reduce((pre,item)=>pre+item.count,0)
  })
  //总价
  const totalPrice = computed(()=>{
    return cartList.value.reduce((pre,item)=>pre+item.count*item.price,0)
  })

  //选中的商品
  const selectedGoods = computed(()=>{
    return cartList.value.filter(item=>item.selected).reduce((pre,item)=>pre+item.count,0)
  })
  //选中的商品总价
  const selectedPrice = computed(()=>{
    return cartList.value.filter(item=>item.selected).reduce((pre,item)=>pre+item.count*item.price,0)
  })
  return{
    cartList,
    addCart,
    delCart,
    total,
    totalPrice,
    selectedCart,
    isAll,
    selectAll,
    selectedGoods,
    selectedPrice
    }
  },{
    persist: true,
  }
)
