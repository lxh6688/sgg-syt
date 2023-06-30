import { createApp } from 'vue'
import '@/style/reset.scss'
import App from '@/App.vue'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import router from '@/router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .component('HospitalTop', HospitalTop)
  .component('HospitalBottom', HospitalBottom)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
