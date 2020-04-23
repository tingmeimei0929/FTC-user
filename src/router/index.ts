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
        children: [
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
          }
        ]
      },
      {
        path: "Account",
        name: "Account",
        component: Account,
        children: [
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
        path: "Member",
        name: "Member",
        component: Member
      },
      {
        path: "Collect",
        name: "Collect",
        component: Collect
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

const router = new VueRouter({
  routes
});

export default router;
