<!--
 * @Author: your name
 * @Date: 2019-12-25 17:43:13
 * @LastEditTime : 2019-12-26 10:36:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\OthersTalk.vue
 -->
<template>
  <div class="o-t-wrapper">
    <div class="left">
      <img src="@/static/img/3.jpg" alt />
    </div>
    <div class="right">
      <div class="top">
        <div class="title">天下无双</div>
        <div class="name">许二狗</div>
      </div>
      <div class="content">疏影横疏影横。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OthersTalk",
  props: {
    msg: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.o-t-wrapper {
  box-sizing: border-box;
  position: relative;
  display: flex;
  margin: 0.1rem 0;

  .left {
    position: relative;
    width: navHeight;
    margin: 0 0.1rem;

    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      width: navHeight;
      height: navHeight;
    }
  }

  .right {
    width: 60%;
    .top {
      display: flex;
      justify-content: flex-start;
      font-size: fontSizeMin;
      padding: 0.02rem 0;

      .title {
        padding: 0.02rem 0.04rem;
        border-radius: 0.03rem;
        background-color: rgb(54, 214, 82);
        color: #ffffff;
      }

      .name {
        padding: 0.02rem 0.04rem;
      }
    }

    .content {
      position: relative;
      margin-top: 0.05rem;
      padding: 0.1rem;
      display inline-block;
      background-color: lowBGC;
      font-size: fontSizeSmall;

      &::before {
        position: absolute;
        top: 10%;
        left: -0.15rem;
        display: inline-block;
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-right-color: lowBGC;
      }
    }
  }
}
</style> 