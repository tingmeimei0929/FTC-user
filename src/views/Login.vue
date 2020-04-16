<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <h4 class="text-center">登录FT中文网</h4>
        <form method="post"
              id="LoginForm">
          <div class="form-group">
            <label for="email"
                   class="form-label">邮箱</label>
            <input class="form-control"
                   type="email"
                   id="email"
                   name="email"
                   placeholder="电子邮箱"
                   maxlength="64"
                   required
                   v-mode="email">
          </div>
          <div class="form-group">
            <label for="password"
                   class="form-label">密码</label>
            <input class="form-control"
                   type="password"
                   id="password"
                   name="password"
                   placeholder="密码"
                   maxlength="64"
                   required
                   v-model="password">
          </div>
          <div class="form-check clearfix">
            <div>
              <input class="form-check-input"
                     type="checkbox"
                     id="rememberMe"
                     name="rememberMe"
                     value="true"
                     checked>
              <label for="rememberMe">记住我</label>
            </div>
            <a v-on:click="forget"
               class="float-right">忘记密码？</a>
          </div>
          <button class="btn btn-block btn-primary"
                  type="submit"
                  data-disable-with="正在登录...">登录</button>
        </form>
        <p class="text-center">
          "还没有FT中文网账号？"
          <a style="color:#0d7680"
             v-on:click="signUp">创建</a>
        </p>
        <div class="text-center weChat">
          <a href="/login/wechat">
            <img src="https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon32_wx_button.png"
                 alt="微信登录">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Login",
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    forget () {
      this.$router.push('/PasswordReset')
    },
    signUp () {
      this.$router.push('/SignUp');
    }
  }
};
</script>
  
<style lang="scss" scoped>
.row {
  justify-content: center !important;
}
.text-center {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.form-label {
  display: flex;
  justify-content: start;
}
.clearfix {
  display: flex;
  justify-content: space-between !important;
}
.float-right {
  display: block;
}
.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1rem;
}
</style>