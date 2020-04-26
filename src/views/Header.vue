<template>
  <header class="navbar">
    <div class="container">
      <a class="header-brand"
         href="http://www.ftchinese.com"
         target="__blank">FT中文网</a>
      <a class="header-brand2"
         href="/login"
         v-show="showLogin">登录</a>
      <!-- <div v-show="showHome">
        <select>登录
          <option><a href="#">{{ msg }}</a></option>
          <option><a href="/login">退出</a></option>
        </select>
      </div> -->
    </div>
  </header>
</template>
    
<script>
export default {
  name: "Header",
  data () {
    return {
      showLogin: 'true',
      showHome: 'false',
      msg: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/Header.scss";
</style>