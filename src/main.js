import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'

//引入懒加载插件
import {lazyPlugin} from '@/directives'
//引入初始化样式文件
import '@/styles/common.scss'
// 引入全局组件插件
import { componentsPlugin } from './components'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')



