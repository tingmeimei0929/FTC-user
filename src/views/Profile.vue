<template>
  <el-container>
    <!-- 提示-->
    <div class="prompt">
      <el-main>
        <span>请验证您的登录邮箱。没有收到验证邮件?</span>
        <button type="submit"
                class="btn btn-link"
                data-disable-with="正在发送...">重新发送</button>
      </el-main>
    </div>
    <!-- 内容 -->
    <el-main>
      <el-row>
        <ul>
          <li v-on:click="mine">我的资料</li>
          <li v-on:click="safe">账号安全</li>
          <li v-on:click="member">会员</li>
          <li v-on:click="collect">收藏的文章</li>
        </ul>
        <div class="col-auto">
          <div class="column"
               v-show="showMine">
            <span class="column-auto">用户名</span>
            <span></span>
            <button class="btn">修改</button>
          </div>
          <div class="column">
            <span class="column-auto">手机号码</span>
            <span></span>
            <button class="btn">修改</button>
          </div>
          <div class="column">
            <ul>
              <li> <span class="column-auto">姓名</span>
                <span></span></li>
              <li> <span class="column-auto">性别</span>
                <span></span></li>
              <li> <span class="column-auto">生日</span>
                <span></span></li>
            </ul>
            <button class="btn">修改</button>
          </div>
          <div class="column">
            <span class="column-auto">地址</span>
            <span></span>
            <button class="btn">修改</button>
          </div>
        </div>
      </el-row>
    </el-main>
  </el-container>
</template>
    
<script>
export default {
  name: "Profile",
  data () {
    return {

    };
  }
};
</script>
  
<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
</style>
