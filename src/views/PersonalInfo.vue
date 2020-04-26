<template>
  <div class="col-auto">
    <h5 class="form-top">个人信息</h5>
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
      <div class="form-group">
        <label for="gender"
               class="
               form-label">性别</label>
        <div class="form-check">
          <input class="form-check-input"
                 id="genderM"
                 type="radio"
                 name="profile[gender]"
                 value="M">
          <label class="form-check-label d-block"
                 for="genderM">
            男
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input"
                 id="genderF"
                 type="radio"
                 name="profile[gender]"
                 value="F">
          <label class="form-check-label d-block"
                 for="genderF">

            女

          </label>
        </div>
      </div>
      <div class="
                 form-group">
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
