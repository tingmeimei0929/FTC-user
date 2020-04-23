<template>
  <el-conatiner>
    <el-main>
      <el-row>
        <div class="col-auto">
          <form method="post">
            <div class="form-group">
              <label for="name"
                     class="form-label">登录邮箱</label>
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
      </el-row>
    </el-main>
  </el-conatiner>
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
