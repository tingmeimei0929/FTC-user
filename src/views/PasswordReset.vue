<template>
  <el-container>
    <el-main>
      <el-row>
        <div class="col-sm">
          <h4 class="text-center">找回密码</h4>
          <form method="post">
            <div class="form-group">
              <input class="form-control"
                     type="email"
                     name="email"
                     id="email-reset"
                     placeholder="登录FT中文网所用的邮箱"
                     maxlength="64"
                     required>
              <small class="form-text text-muted">请输入您的电子邮箱，我们会向该邮箱发送邮件，帮您重置密码</small>
            </div>
            <button class="btn btn-block btn-primary"
                    type="submit"
                    data-disable-with="正在发送...">发送邮件</button>
          </form>
        </div>
      </el-row>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
    
<script>
export default {
  name: "PasswordReset",
  data () {
    return {

    };
  }
};
</script>
  
<style lang="scss" scoped>
@import "../assets/style/Main.scss";
</style>