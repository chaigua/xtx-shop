import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//测试axios
import { testInstance } from './apis/testApi'
testInstance().then(res=>{
  console.log(res);
})


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
