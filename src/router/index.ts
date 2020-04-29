import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Login from "../views/Login.vue";
import Header from "../views/Header.vue";
import Footer from "../views/Footer.vue";
import SignUp from "../views/SignUp.vue";
import PasswordReset from "../views/PasswordReset.vue";
import Profile from "../views/Profile.vue";
import Info from "../views/Info.vue";
import Account from "../views/Account.vue";
import Collect from "../views/Collect.vue";
import InfoName from "../views/InfoName.vue";
import Phone from "../views/Phone.vue";
import Member from "../views/Member.vue";
import PersonalInfo from "../views/PersonalInfo.vue";
import AccountEmail from "../views/AccountEmail.vue";
import ChangePassword from "../views/ChangePassword.vue";
import store from '@/store';




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
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/PasswordReset",
    name: "PasswordReset",
    component: PasswordReset,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
    children: [
      {
        path: '/',
        redirect: 'Info'
      },
      {
        path: "Info",
        name: 'Info',
        component: Info,
      },
      {
        path: "Account",
        name: "Account",
        component: Account,
      },
      {
        path: "Member",
        name: "Member",
        component: Member
      },
      {
        path: "Collect",
        name: "Collect",
        component: Collect
      },
      {
        path: "infoName",
        name: 'InfoName',
        component: InfoName,
      },
      {
        path: "phone",
        name: 'Phone',
        component: Phone,
      },
      {
        path: "personalInfo",
        name: 'PersonalInfo',
        component: PersonalInfo,
      },
      {
        path: "AccountEmail",
        name: 'AccountEmail',
        component: AccountEmail,
      },
      {
        path: "ChangePassword",
        name: 'ChangePassword',
        component: ChangePassword,
      }
    ]
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
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
const router = new VueRouter({
  routes: routes
});
// router.beforeEach((to, from, next) => {
//   if (to.path === "/") {
//     next()
//   } else if (to.path === "{ name: 'Profile' } ") {
//     //  获取本地存储的token的值
//     const token = localStorage.getItem('Authorization')

//     if (token === null || token === '') {
//       next("{ name: 'Login' } ")
//     } else {
//       next()
//     }
//   }
// })

export default router