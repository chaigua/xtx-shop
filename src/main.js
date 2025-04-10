import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入懒加载插件
import {lazyPlugin} from '@/directives'
//引入初始化样式文件
import '@/styles/common.scss'
// import { valueEquals } from 'element-plus'

//测试axios
// import { testInstance } from './apis/testApi'
// testInstance().then(res=>{
//   console.log(res);
// })


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')



