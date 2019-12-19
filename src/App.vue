<!--
 * @Author: your name
 * @Date: 2019-11-04 15:46:23
 * @LastEditTime : 2019-12-18 16:32:41
 * @LastEditors  : Please set LastEditors
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

#app {
  height: 100vh;
  font-size: 0.18rem;
}

.app-nav {
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: lowBGC;
  left: 0;
  bottom: 0;
  z-index: 999999;
  width: 100%;
  height: navHeight;

  .app-nav-item {
    padding: 0.02rem 0.05rem;
    text-align: center;
    line-height: navHeight;
    width: 100%;
    opacity: 0.9;
    color: #666666;
  }
}
</style>

<style lang="stylus">
@import '~@/assets/stylus.styl';
.border-10 {
  border-bottom: 0.1rem solid lowBGC;

  border-color: lowBGC;
}
.border-1 {
  border-bottom : 0.01rem solid lowBGC;
}
.padding-10 {
  padding 0.1rem 0
  }
</style>
