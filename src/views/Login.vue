<template>
  <main>
    <div class="container">
      <div class="main-row">
        <div class="row-col">
          <h4 class="text-center">登录FT中文网</h4>
          <form method="post"
                @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email"
                     class="form-label">邮箱</label>
              <input class="form-control"
                     type="email"
                     placeholder="电子邮箱"
                     maxlength="64"
                     required
                     v-mode="loginForm.email"
                     v-on:blur="emailBlur" />
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
                     v-model="loginForm.password" />
            </div>
            <div class="form-check clearfix">
              <div>
                <input class="form-check-input"
                       type="checkbox"
                       id="rememberMe"
                       name="rememberMe"
                       value="true"
                       checked />
                <label for="rememberMe">记住我</label>
              </div>
              <a v-on:click="forget"
                 class="float-right">忘记密码？</a>
            </div>
            <button class="btn btn-block btn-primary"
                    type="submit"
                    data-disable-with="正在登录..."
                    @click="login">
              登录
            </button>
          </form>
          <p class="text-center p-2">
            还没有FT中文网账号？
            <a style="color:#0d7680"
               @click="signUp">创建</a>
          </p>
          <div class="text-center weChat">
            <a href="/login/wechat">
              <img src="https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon32_wx_button.png"
                   alt="微信登录" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import store from "../store/index";
export default {
  name: "Login",
  store,
  data () {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    forget () {
      this.$router.push("/PasswordReset");
    },
    signUp () {
      this.$router.push("/SignUp");
    },
    login () {
      if (this.email === "" || this.password === "") {
        alert("请输入此字段");
      } else {
        alert("kkk");
        this.axios({
          method: "post",
          url: "/user/login",
          data: this.loginForm
        })
          .then(res => {
            console.log(res.data);
            this.userToken = "Bearer" + res.data.data.body.userToken;
            // 将用户token保存到vuex中
            this.changeLogin({ Authorization: this.userToken });
            this.$router.push("/Profile");
          })
          .catch(error => {
            alert("form data not found");
            console.log(error);
          });
      }
    },
    emailBlur () {
      const verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!verify.test(this.email)) {
        this.message = "邮箱格式错误, 请重新输入";
      } else {
        this.message = "可以请求接口了";
      }
    },
    onSubmit () {
      //   this.axios
      //     .post("/login", {
      //       email: this.email,
      //       password: this.password
      //     })
      //     .then(response => {
      //       if (response.status === 200) {
      //         const data = JSON.parse(response.data);
      //         this.$store.commit("GET_USER", data.email);
      //       }
      //     });
      // }
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/Main.scss";
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
  color: #0d7680;
}
.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1rem;
}
</style>
