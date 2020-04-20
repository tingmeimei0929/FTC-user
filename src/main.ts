import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../src/assets/style/comment.scss';

Vue.config.productionTip = false;

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount("#app");
