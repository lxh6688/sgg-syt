import { createApp } from 'vue'
import '@/style/reset.scss'
import App from '@/App.vue'
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'

createApp(App)
  .component('HospitalTop', HospitalTop)
  .component('HospitalBottom', HospitalBottom)
  .mount('#app')
