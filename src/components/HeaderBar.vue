<!--
 * @Author: your name
 * @Date: 2019-12-19 11:19:30
 * @LastEditTime : 2019-12-19 11:19:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\HeaderBar.vue
 -->
<template>
  <div class="wrapper border-1">
    <div class="left" @click="leftClick">back</div>
    <div class="middle">{{title}}</div>
    <div class="right" @click="rightClick"></div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
  props: {
    title: String
  },
  methods: {
    leftClick() {
      this.$emit("click-left");
    },
    rightClick() {
      this.$emit("click-right");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.wrapper {
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: navHeight;
  padding: 0 0.1rem;
  z-index 999999
  background-color #ffffff
//   border: 1px solid red;

  .left {
    position: absolute;
    top: 0;
    left: 0.1rem;
    width: navHeight;
    height: navHeight;
    text-align: center;
    line-height: navHeight;
    // border: 1px solid red;
  }

  .middle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 60%;
    height: navHeight;
    text-align: center;
    line-height: navHeight;
    transform: translateX(-50%);
    // border: 1px solid yellow;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0.1rem;
    width: navHeight;
    height: navHeight;
    text-align: center;
    line-height: navHeight;
    // border: 1px solid red;
  }
}
</style> 
