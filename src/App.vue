<template>
  <div id="app">
    <header-vue></header-vue>
    <hr />
    <router-view class="main"
                 name="header"></router-view>
    <router-view class="main"></router-view>
    <!--name省略表示name='default'-->
    <router-view class="main"
                 name="footer"></router-view>
    <hr />
    <footer-vue></footer-vue>
    <router-view />
  </div>
</template>

<style lang="scss">
.main {
  height: 70%;
}
</style>
