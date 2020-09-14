import axios from "axios";
import { Message } from "element-ui";
const server = axios.create({
  // baseURL: process.env.VUE_APP_API_URL, // url = base url + request url 生产环境要打开
  timeout: 5000,
  withCredentials: true
});
// window["base_url"] = process.env.VUE_APP_API_URL; //生产环境要打开
server.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    // console.log('err' + error) // for debug
    Message({
      message: `请求超时，请稍后再试`,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

server.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    // console.log('err' + err) // for debug
    Message({
      message: `请求超时，请稍后再试`,
      type: "err",
      duration: 5 * 1000
    });
    return Promise.reject(err);
  }
);

export default (method, url, data = {}) => {
  if (method.toUpperCase() == "GET") {
    return server.get(url, {
      params: data
    });
  } else if (method.toUpperCase() == "POST") {
    return server.post(url, data);
  }
};
