import { createApp } from 'vue'
import '@/style/reset.scss'
import App from '@/App.vue'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import Login from '@/components/login/index.vue';
import router from '@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import pinia from '@/store'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

createApp(App)
  .component('HospitalTop', HospitalTop)
  .component('HospitalBottom', HospitalBottom)
  .component('Login', Login)
  .use(router)
  .use(ElementPlus, {locale: zhCn})
  .use(pinia)
  .mount('#app')
