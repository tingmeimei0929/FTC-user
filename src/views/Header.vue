<template>
  <div>
    <header class="navbar">
      <div class="container">
        <a class="navbar-brand"
           href="http://www.ftchinese.com"
           target="__blank">FT中文网</a>
        <a class="navbar-brand2"
           href="/login">登录</a>
      </div>
    </header>
  </div>
</template>
    
<script>
export default {
  name: "Header",
  data () {
    return {

    };
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: 1px solid #ccc1b7;
  position: fixed;
  top: 0;
}
.container {
  display: flex;
  justify-content: space-between !important;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 9.6%;
}
.container > a {
  color: #33302e;
  text-align: center;
  display: inline-block;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  cursor: pointer;
}
.navbar-brand2 {
  color: #0d7680 !important;
  font-size: 1.15rem !important;
}
.navbar-brand2:hover {
  color: #252423;
}
</style>