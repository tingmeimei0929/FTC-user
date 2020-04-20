import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Login from "../views/Login.vue";
import Header from "../views/Header.vue";
import Footer from "../views/Footer.vue";
import SignUp from "../views/SignUp.vue";
import PasswordReset from "../views/PasswordReset.vue";
import Profile from "../views/Profile.vue";

Vue.component('headerVue', Header);
Vue.component('footerVue', Footer);

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/SignUp",
    name: "signUp",
    component: SignUp
  },
  {
    path: "/PasswordReset",
    name: "PasswordReset",
    component: PasswordReset
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile
  },
  {
    path: '/',
    components: { // key => value
      header: Header,
      default: Footer, //默认省略不写name的情况
      footer: Footer
    }
  },
];

const router = new VueRouter({
  routes
});

export default router;
