<!--
 * @Author: your name
 * @Date: 2019-11-04 16:27:43
 * @LastEditTime: 2019-11-04 17:53:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\views\My.vue
 -->
<template>
  <div class="my-wrapper" ref="wrap">
    <div class="my-content">
      <div class="my-item">登录</div>
      <div class="my-item">icon</div>
      <div class="my-item">发现</div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {

    };
  },

  components: {},

  computed: {},

  mounted: function() {
      // 初始化
      console.log(BScroll)
      this.bsScroll = new BScroll(this.$refs.wrap, {
          probeType: 1, 
          click: true
      })
  },
  methods: {

  }
};
</script>

<style lang="stylus" scoped>
.my-wrapper {
  width: 100%;
  height 100%;
  background-color: green;
  .my-item {
      width 100%
      height 5rem
  }
}
</style>