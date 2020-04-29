<template>
  <header class="navbar">
    <div class="container">
      <a class="header-brand"
         href="http://www.ftchinese.com"
         target="__blank">FT中文网</a>
      <a class="header-brand2"
         href="/login"
         v-if="!this.$store.state.user">登录</a>
      <select v-else>设置
        <option>{{ this.$store.state.user }} </option>
        <option><a href="/login">退出</a></option>
      </select>
    </div>
  </header>
</template>

<script>
import store from "../store/index";
export default {
  name: "Header",
  store,
  data () {
    return {
      showLogin: "true",
      showHome: "false",
      msg: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/Header.scss";
</style>
