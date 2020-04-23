<template>
  <el-conatiner>
    <el-main>
      <el-row>
        <div class="col-auto">
          <h5>更改密码</h5>
          <form method="post">
            <div class="form-group">
              <label for="oldPassword"
                     class="form-label">当前密码</label>
              <input class="form-control"
                     type="text"
                     id="oldPassword"
                     name="oldPassword"
                     required />
            </div>
            <div class="form-group">
              <label for="newPassword"
                     class="form-label">新密码</label>
              <input class="form-control"
                     type="text"
                     id="newPassword"
                     name="newPassword"
                     minlength="8"
                     maxlength="64"
                     required />
              <small class="form-text text-muted">最少8个字符</small>
            </div>
            <div class="form-group">
              <label for="confirmPassword"
                     class="form-label">再次输入新密码</label>
              <input class="form-control"
                     type="text"
                     id="confirmPassword"
                     name="confirmPassword"
                     minlength="8"
                     maxlength="64"
                     required />
              <small class="form-text text-muted">两次输入的新密码必须一致</small>
            </div>

            <div class="form-check clearfix">
              <div>
                <button type="submit"
                        data-disable-with="保存..."
                        class="btn btn-primary">
                  保存密码
                </button>
              </div>
              <a class="float-right"
                 href="/PasswordReset">忘记密码？</a>
            </div>
          </form>
          <router-view></router-view>
        </div>
      </el-row>
    </el-main>
  </el-conatiner>
</template>

<script>
export default {
  name: "ChangePassword",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
@import "../assets/style/Main.scss";
</style>
