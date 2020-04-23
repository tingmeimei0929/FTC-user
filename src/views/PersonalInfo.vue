<template>
  <el-conatiner>
    <el-main>
      <el-row>
        <div class="col-auto">
          <h5>个人信息</h5>
          <form method="post">
            <div class="form-row">
              <div class="form-group">
                <label for="familyName"
                       class="form-label">姓</label>
                <input class="form-control"
                       type="text"
                       id="familyName"
                       name="familyName"
                       required />
              </div>
              <div class="form-group">
                <label for="givenName"
                       class="form-label">名</label>
                <input class="form-control"
                       type="text"
                       id="givenName"
                       name="givenName"
                       required />
              </div>
            </div>
            <div class="from-group">
              <input id="man"
                     type="radio"
                     checked="checked"
                     name="gender" />男<input id="woman"
                     type="radio"
                     name="gender" />
            </div>
            <div class="form-group">
              <label for="birthday"
                     class="form-label">生日</label>
              <input class="form-control"
                     type="text"
                     id="birthday"
                     name="phone"
                     placeholder="年/月/日"
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
  name: "PersonalInfo",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
@import "../assets/style/Main.scss";
</style>
