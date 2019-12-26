<!--
 * @Author: your name
 * @Date: 2019-12-19 13:28:25
 * @LastEditTime : 2019-12-23 13:53:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\BSContent.vue
 -->
<template>
  <div class="my-wrapper" ref="wrap">
    <div class="my-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BSContent",
  props: {
    msg: String
  },
  mounted() {
    // 初始化
    setTimeout(() => {
      this.bsScroll = new BScroll(this.$refs.wrap, {
        probeType: 1,
        click: true
      });
    }, 1000);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.my-wrapper {
  width: 100%;
  height: 'calc(100vh - 2* %s)' % navHeight;
  position: relative;
  top: 0px;
  overflow: hidden;
  z-index: 1;
}
</style> 