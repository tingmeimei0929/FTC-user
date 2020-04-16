import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";
import Header from "../views/Header.vue";
import Footer from "../views/Footer.vue";
import SignUp from "../views/SignUp.vue";
import PasswordReset from "../views/PasswordReset.vue"

Vue.component('headerVue', Header);
Vue.component('footerVue', Footer);

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    // children: [
    //   {
    //     path: "signUp",
    //     name: "SignUp",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     // component: () =>
    //     //   import(/* webpackChunkName: "SignUp" */ "../views/SignUp.vue")
    //     component: SignUp,
    //   },
    //   {
    //     path: "PasswordReset",
    //     name: "PasswordReset",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //       import(/* webpackChunkName: "password-reset" */ "../views/PasswordReset.vue")
    //   }
    // ]
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
    path: '/',
    components: { // key => value
      header: Header,
      default: Footer, //默认省略不写name的情况
      footer: Footer
    }
  },
  // {
  //   path: "/footer",
  //   name: "Footer",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Footer.vue")
  // },
  // {
  //   path: "/header",
  //   name: "Header",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "header" */ "../views/Header.vue")
  // },

];

const router = new VueRouter({
  routes
});

export default router;
