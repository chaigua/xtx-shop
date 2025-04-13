import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',component:()=>import ('@/views/Layout/index.vue'),
      children:[
        {path:'',component:()=>import('@/views/Home/index.vue')},
        {path:'/category/:id',component:()=>import('@/views/Category/index.vue')},
        {path:'/category/sub/:id',component:()=>import('@/views/SubCategory/index.vue')},
        {path:'/detail/:id',component:()=> import('@/views/Detail/index.vue')},
        {path:'/cartList',component:()=>import('@/views/CartList/index.vue')},
        {path:'/checkout',component:()=>import('@/views/Checkout/index.vue')},
        {path:'/pay',component:()=>import('@/views/Pay/index.vue')}
      ]
    },
    {path:'/login',component:()=>import ('@/views/Login/index.vue')}

  ],
  //路由滚动行为定制
  scrollBehavior(){
    return {
      top:0,
       behavior: 'smooth'
    }
  }
})

export default router


/* import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category',
          component: Category
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
 */
