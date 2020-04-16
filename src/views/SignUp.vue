<template>

  <div class="container">
    <div class="row">
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
                   required>
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
                   required>
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
                   required>
          </div>
          <button class="btn btn-block btn-primary"
                  type="submit"
                  data-disable-with="正在注册...">注册</button>
        </form>
        <p class="text-center">
          <small>"注册即代表您同意FT中文网"
            <a href=" "
               target="_blank">《用户注册协议》</a>
          </small>
        </p>
        <p class="text-center">
          已有账号？
          <a href="/login">登录</a>
        </p>
      </div>
    </div>
    <header-vue></header-vue>
    <footer-vue></footer-vue>
    <router-view></router-view>
  </div>
</template>
    
<script>
export default {
  name: "SignUp",
  data () {
    return {

    };
  }
};
</script>
  
<style lang="scss" scoped>
.text-center {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  text-align: center !important;
}
.form-label {
  display: flex;
  justify-content: start;
}
small {
  display: flex;
  justify-content: start !important;
}
p {
  margin-top: 10px;
  margin-bottom: 1rem;
}

a {
  color: #0d7680;
}
</style>