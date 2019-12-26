<!--
 * @Author: your name
 * @Date: 2019-12-20 09:42:35
 * @LastEditTime : 2019-12-20 09:43:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\RowBread.vue
 -->
<template>
  <div class="wrapper-bs" ref="wrap">
    <div class="wrapper">
      <div class="item">推荐</div>
      <div class="item">关注</div>
      <div class="item">前端</div>
      <div class="item">推荐</div>
      <div class="item">关注</div>
      <div class="item">前端</div>
      <div class="item">推荐</div>
      <div class="item">后端</div>
      <div class="item">相亲</div>
      <div class="item">占卜</div>
      <div class="item">关注</div>
      <div class="item">前端</div>
      <div class="item">推荐</div>
      <div class="item">关注</div>
      <div class="item">前端</div>
      <div class="item">结尾</div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "RowBread",
  props: {
    msg: String
  },
  mounted() {
    // 初始化
    setTimeout(() => {
      this.bsScroll = new BScroll(this.$refs.wrap, {
        probeType: 1,
        scrollX: true,
        scrollY: false,
        click: true
      });
    }, 1000);
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.wrapper-bs {
  width: 100%;
  height: navHeight;
  overflow: hidden;

  .wrapper {
    display: inline-block;
    white-space: nowrap;

    .item {
      width: 0.6rem;
      height: 1rem;
      display: inline-block;
      text-align: center;
      line-height: navHeight;
      // border 1px solid red
      &::after {
        content "|"
        padding-left 0.1rem
        color lowBGC
        }
    }
  }
}
</style> 