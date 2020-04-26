<template>
  <div id="app">
    <header-vue></header-vue>
    <router-view class="main"
                 name="header"></router-view>
    <router-view class="main"></router-view>
    <!--name省略表示name='default'-->
    <router-view class="main"
                 name="footer"></router-view>
    <footer-vue class="footer"></footer-vue>
  </div>
</template>

<style lang="scss">
#app {
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border: hidden;
}

.main {
  min-height: 80vh;
}
</style>
