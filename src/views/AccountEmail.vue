<template>
  <div class="col-auto">
    <h5 class="form-top">登录邮箱</h5>
    <form method="post">
      <div class="form-group">
        <input class="form-control"
               type="text"
               id="email"
               name="email"
               placeholder="email@example.org" />

        <button type="submit"
                data-disable-with="更新..."
                class="btn btn-primary">
          更新
        </button>
      </div>
    </form>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AccountEmail",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
@import "../assets/style/Main.scss";
</style>
