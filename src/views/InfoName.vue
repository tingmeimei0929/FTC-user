<template>
  <el-conatiner>
    <el-main>
      <el-row>
        <div class="col-auto">
          <form method="post">
            <div class="form-group">
              <label for="name"
                     class="form-label">用户名</label>
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
      </el-row>
    </el-main>
  </el-conatiner>
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
