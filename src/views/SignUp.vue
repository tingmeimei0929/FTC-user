<template>
  <el-container>
    <el-main>
      <el-row>
        <div class="col-sm">
          <h4 class="text-center">创建FT中文网账号</h4>
          <form method="post">
            <div class="form-group">
              <label for="email"
                     class="form-label">邮箱</label>
              <input class="form-control"
                     type="email"
                     id="email-signUp"
                     name="email"
                     placeholder="电子邮箱"
                     maxlength="64"
                     required />
              <small class="form-text text-muted">用于登录FT中文网</small>
            </div>
            <div class="form-group">
              <label for="password"
                     class="form-label">密码</label>
              <input class="form-control"
                     type="password"
                     id="password-signUP"
                     name="password"
                     placeholder="密码"
                     maxlength="64"
                     required />
              <small class="form-text text-muted">最少8个字符</small>
            </div>
            <div class="form-group">
              <label for="confirmPassword"
                     class="form-label">确认密码</label>
              <input class="form-control"
                     type="password"
                     id="confirmPassword"
                     name="confirmPassword"
                     placeholder="再次输入新密码"
                     maxlength="64"
                     required />
            </div>
            <button class="btn btn-block btn-primary"
                    type="submit"
                    data-disable-with="正在注册...">
              注册
            </button>
          </form>
          <p class="text-center p-2 margin-0">
            <small>注册即代表您同意FT中文网
              <a href=" "
                 target="_blank">《用户注册协议》</a>
            </small>
          </p>
          <p class="text-center p-3">
            已有账号？
            <a href="/login">登录</a>
          </p>
        </div>
      </el-row>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "SignUp",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/Main.scss";
.p-2 {
  font-size: 14.4px;
  padding: 0 !important;
}
</style>
