import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import './assets/main.css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
//import '../node_modules/material-design-icons/iconfont/material-icons.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
