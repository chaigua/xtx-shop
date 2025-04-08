import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/',component:()=>import ('@/views/Layout/index.vue'),
      children:[
        {path:'',component:()=>import('@/views/Home/index.vue')},
        {path:'category',component:()=>import('@/views/Category/index.vue')}
      ]
    },
    {path:'/login',component:()=>import ('@/views/Login/index.vue')}

  ],
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
