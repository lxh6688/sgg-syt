import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  //路由的模式的设置
  history: createWebHistory(),
  //管理路由
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/pages/home/index.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/hospital',
      component: () => import('@/pages/hospital/index.vue'),
      meta:{
        title:'首页'
      }
    },
  ],
  //滚动行为:控制滚动条的位置
  scrollBehavior() {
    return {
        left: 0,
        top: 0
    }
  }
})