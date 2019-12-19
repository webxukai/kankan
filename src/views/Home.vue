<!--
 * @Author: your name
 * @Date: 2019-11-04 16:10:50
 * @LastEditTime : 2019-12-19 13:54:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\views\Home.vue
 -->
<template>
  <div class="home wrapper" ref="wrap">
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>22222222</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>22222222</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>22222222</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>22222222</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>22222222</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>22222222</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>1111111111</div>
      <div>22222222</div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import BScroll from "better-scroll";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted: function() {
    // 初始化
    this.bsScroll = new BScroll(this.$refs.wrap, {
      probeType: 1,
      click: true
    });
  }
};
</script>
<style lang="stylus" scoped>
.wrapper {
  width: 100%;
  position: absolute;
  top: 45px;
  bottom: 50px; /* 关键 */
  overflow: hidden;
  z-index: 1;
}
</style>
