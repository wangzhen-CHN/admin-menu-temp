import axios from 'axios';
 
// `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
// 如果请求超过 `timeout` 的时间，请求将被中断
const service = axios.create({
    baseURL: 'https://api.coder.wang',
    timeout: 10000
})

service.interceptors.response.use(response => {
  //请求成功
  return response.data;
}, error => {
  switch (error.response.status) {
    case 401:
      alert("不允许访问,请联系网站！");
      break;
    case 500:
      alert("服务器断开，请稍后重试。");
      break;
    default:
      alert("请求异常");
      break;
  }
  return Promise.reject(error)
})

export default service;