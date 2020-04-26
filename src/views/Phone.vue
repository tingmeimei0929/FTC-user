<template>
  <div class="col-auto">
    <h5 class="form-top">手机号码</h5>
    <form method="post">
      <div class="form-group">
        <input class="form-control"
               type="text"
               id="phone"
               name="phone"
               maxlength="11"
               required />
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
  name: "Phone",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
@import "../assets/style/Main.scss";
</style>
