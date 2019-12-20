<!--
 * @Author: your name
 * @Date: 2019-12-19 15:46:06
 * @LastEditTime : 2019-12-19 15:48:06
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\HeaderBar2.vue
 -->
<template>
  <div class="wrapper">
    <div class="input-wrapper">
      <div class="left">wode</div>
      <input type="text" placeholder="请输入内容..." />
    </div>
    <div class="right">
      <div>搜索</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBar2",
  props: {
    msg: String
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
  // border: 1px solid red;
  background-color: baseColor;

  .input-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;

    // border 1px solid red
    .left {
      position: absolute;
      width: 20%;
      height: 100%;
      text-align: center;
      line-height: navHeight;
      // border 1px solid green
    }

    input {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 80%;
      height: 80%;
      right: 0;
      padding: 0 0.1rem;
      border-radius: 0.04rem;
    }
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    // border 1px solid red
    width: 20%;
    height: 100%;
    text-align: center;
    line-height: navHeight;
    cursor: pointer;
  }
}
</style> 