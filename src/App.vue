<!--
 * @Author: your name
 * @Date: 2019-11-04 15:46:23
 * @LastEditTime: 2019-11-04 17:51:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\App.vue
 -->
<template>
  <div id="app">
    <router-view />
    <div class="app-nav">
      <router-link class="app-nav-item" to="/">首页</router-link>
      <router-link class="app-nav-item" to="/about">关注</router-link>
      <router-link class="app-nav-item" to="/my">我的</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';
#app{
  height: 100vh;
}
.app-nav {
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: #eeeeee;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100%;
  height: navHeight;

  .app-nav-item {
    padding: 2px 5px;
    text-align: center;
    line-height: navHeight;
    width: 100%;
    opacity: 0.9;
    color: #666666;
  }
}
</style>
