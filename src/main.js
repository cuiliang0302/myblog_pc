import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store';
import '@/assets/style/index.scss'
import ElementPlus from '@/plugins/ElementPlus'
import 'element-plus/lib/theme-chalk/index.css'
import animate from "animate.css";

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(animate)
app.mount('#app')
