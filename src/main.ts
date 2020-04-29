import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import '../src/assets/style/comment.scss';

Vue.config.productionTip = false;
Vue.prototype.$ajax = axios
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
}).$mount("#app");

// // 请求拦截器
axios.interceptors.request.use(config => {
  if (localStorage.getItem('Authorization')) {
    config.headers.Authorization = localStorage.getItem('Authorization')
  }
  return config
}, error => {
  return Promise.reject(error)
})
