<template>
  <div class="col-auto">
    <div class="col-list">
      <span class=" column-auto">用户名</span>
      <span></span>
      <button class="btn btn-link btn-modify">
        <router-link to="/Profile/InfoName">修改</router-link>
      </button>
    </div>
    <div class="col-list">
      <span class="column-auto">手机号码</span>
      <span></span>
      <button class="btn btn-link btn-modify">
        <router-link to="/Profile/Phone">修改</router-link>
      </button>
    </div>
    <div class="col-list ul-info">
      <ul>
        <li class="info-3">
          <span class="column-auto">姓名</span> <span></span>
        </li>
        <li class="info-3">
          <span class="column-auto">性别</span> <span></span>
        </li>
        <li class="info-3">
          <span class="column-auto">生日</span> <span></span>
        </li>
      </ul>
      <button class="btn btn-link btn-modify">
        <router-link to="/Profile/PersonalInfo">修改</router-link>
      </button>
    </div>
    <div class="col-list">
      <span class="column-auto">地址</span>
      <span></span>
      <button class="btn btn-link btn-modify">修改</button>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "Info",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
</style>
