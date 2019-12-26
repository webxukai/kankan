<!--
 * @Author: your name
 * @Date: 2019-12-23 11:09:47
 * @LastEditTime : 2019-12-23 13:46:26
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\MessageCard.vue
 -->
<template>
  <div class="wrapper">
    <div class="img-wrapper">
      <img :src="baseData.img" alt />
    </div>
    <div class="content border-1">
      <div class="top">
        <div class="name">{{baseData.name}}</div>
        <div class="time">{{baseData.time}}</div>
      </div>
      <div class="bottom">
        <div class="message">{{baseData.message}}</div>
        <div class="number">{{baseData.number}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageCard",
  props: {
    baseData: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.wrapper {
  position: relative;
  display: flex;
  margin 0.1rem 0
  height: 1.5 * navHeight;
  .img-wrapper {
    box-sizing: border-box;
    height: 100%;
    width: 1.5 * navHeight;
    padding: 0.03rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }

  .content {
    box-sizing border-box
    display: flex;
    flex-direction: column;
    padding 0.09rem
    width 'calc(100% - 1.5 * %s)' %navHeight
    .top {
      display: flex;
      justify-content space-between
      padding 0.03rem 0
      .name {
          width 80%
          ellipsis()
          }
      .time {
          font-size fontSizeMin
          color grayColor
          ellipsis()
          }
    }

    .bottom {
      display: flex;
      justify-content space-between
      padding 0.03rem 0
      .message {
          width 80%
          font-size fontSizeSmall
          color grayColor
          ellipsis()
          }
      .number {
          background-color activeColor
          padding 0.02rem 0.04rem
          border-radius 2 * navHeight
          color #ffffff
          font-size fontSizeMin
          ellipsis()
          }
    }
  }
}
</style> 