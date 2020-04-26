<template>
  <div class="col-auto">
    <h5 class="form-top">用户名</h5>
    <form method="post">
      <div class="form-group">
        <input class="form-control"
               type="text"
               id="userName"
               name="userName"
               maxlength="24"
               required />
        <small class="form-text text-muted">20字符以内 </small>
        <button type="submit"
                data-disable-with="保存..."
                class="btn btn-primary">
          保存
        </button>
      </div>
    </form>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "InfoName",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
@import "../assets/style/Main.scss";
</style>
