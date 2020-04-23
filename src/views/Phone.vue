<template>
  <el-conatiner>
    <el-main>
      <el-row>
        <div class="col-auto">
          <form method="post">
            <div class="form-group">
              <label for="phone"
                     class="form-label">手机号码</label>
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
      </el-row>
    </el-main>
  </el-conatiner>
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
