<template>
  <el-container>
    <!-- 提示-->
    <div class="prompt">
      <el-main>
        <span>请验证您的登录邮箱。没有收到验证邮件?</span>
        <button type="submi"
                class="btn btn-link"
                data-disable-with="正在发送...">
          重新发送
        </button>
      </el-main>
    </div>
    <!-- 内容 -->
    <el-main>
      <el-row>
        <ul class="col-group">
          <li>
            <router-link to="/Profile/Info">我的资料</router-link>
          </li>
          <li>
            <router-link to="/Profile/Account">账号安全</router-link>
          </li>
          <li>
            <router-link to="/Profile/Member">会员</router-link>
          </li>
          <li>
            <router-link to="/Profile/Collect">收藏的文章</router-link>
          </li>
        </ul>
        <div class="col-auto">
          <router-view></router-view>
        </div>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "Profile",
  data () {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
</style>
