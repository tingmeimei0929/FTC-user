<template>
  <el-conatiner>
    <el-main>
      <el-row>
        <div class="col-auto">
          <h4>收藏的文章</h4>
          <router-view></router-view>
        </div>
      </el-row>
    </el-main>
  </el-conatiner>
</template>

<script>
export default {
  name: "Collect",
  data () {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/MainProfile.scss";
</style>
