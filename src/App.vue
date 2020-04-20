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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

header-vue {
  flex-shrink: 0;
  display: block;
}

.main,
footer-vue {
  overflow-y: scroll;
  display: block;
}
.main {
  min-height: 80vh;
}
</style>
