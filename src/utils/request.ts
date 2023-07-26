import axios from 'axios';
//@ts-ignore
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user';

const request = axios.create({
  baseURL: '/api',//请求的基础路径的设置
  timeout: 5000//超时的时间的设置,超出五秒请求就是失败的
});

//请求拦截器
request.interceptors.request.use((config) => {
  let userStore = useUserStore();
  if (userStore.userInfo.token) {
    config.headers.token = userStore.userInfo.token;
  }
  return config;
});

//响应拦截器
request.interceptors.response.use((response) => {
  return response.data;
}, (error) => {
  let status = error.response.status;
  switch (status) {
    case 404:
      //错误提示信息
      ElMessage({
        type: 'error',
        message: '请求失败,路径出现问题'
      })
      break;
    case 500 | 501 | 502 | 503 | 504 | 505:
      ElMessage({
        type: 'error',
        message: '服务器挂了'
      })
      break;
    case 401:
      ElMessage({
        type: 'error',
        message: '参数有误'
      })
      break;
  }
  return Promise.reject(new Error(error.message))
});

export default request;


