import axios from 'axios'
// http://152.136.185.210:8000/api/z8/home/data?type=pop&page=1
// 旧： http://123.207.32.32:8000
export function request(config){
  // 1. 创建 axios 实例
  const  instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/z8',
    timeout:10000,
  });

  // 2. axios 拦截器
  // 2.1 拦截请求
  instance.interceptors.request.use( (config) => {
    return config;
  }, (err) => {
    console.log('request-error', err);
  });

  // 2.2 拦截响应
  instance.interceptors.response.use( (res) => {
    return res.data;
  }, (err) => {
    console.log('response-error',err);
  });

  // 3. 发送网络请求
  return instance(config);

};
