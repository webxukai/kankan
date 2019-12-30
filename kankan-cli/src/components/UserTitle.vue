<!--
 * @Author: your name
 * @Date: 2019-12-30 10:17:27
 * @LastEditTime : 2019-12-30 11:06:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\kankan-cli\src\components\UserTitle.vue
 -->
<template>
  <div class="u-s-title">
    <div class="left">
      <img src="@/static/img/3.jpg" alt />
    </div>
    <div class="right">
      <div class="top">{{userName}}</div>
      <div class="span-wrapper">
        <span>头条 2</span>
        <span>关注 3</span>
        <span>粉丝 4</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserTitle",
  props: {
    msg: String,
    userName : String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.u-s-title {
  box-sizing: border-box;
  position: relative;
  display: flex;
  margin: 0.1rem 0;
  height: 1.5 * navHeight;

  .left {
    position: relative;
    width: 1.5 * navHeight;
    margin: 0 0.1rem;

    img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      width: 1.5 * navHeight;
      height: 1.5 * navHeight;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;

    .top {
      display: flex;
      justify-content: flex-start;
      padding: 0.02rem 0;
      font-weight: 700;
    }

    .span-wrapper {
      display: inline-block;
      font-size: fontSizeSmall;
      color grayColor;
      span {
          padding 0 0.15rem 0 0
      }
    }
  }
}
</style> 