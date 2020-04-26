<template>
  <div class="col-auto">
    <router-view></router-view>
    <div class="col-list">
      <span class="
               column-auto">登录邮箱</span>
      <span></span>
      <button class="btn btn-link btn-modify btn">
        <router-link to="/Profile/AccountEmail">修改</router-link>
      </button>
    </div>
    <div class="col-list">
      <span class="column-auto">密码</span>
      <span></span>
      <button class="btn btn-link btn-modify">
        <router-link to="/Profile/ChangePassword">修改</router-link>
      </button>
    </div>
    <div class="col-list col-h4">
      <h4>账号绑定</h4>
    </div>
    <div class="col-list">
      <span class="column-auto">微信</span>
      <span></span>
      <button class="btn btn-link btn-modify">尚未绑定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Account",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
</style>
