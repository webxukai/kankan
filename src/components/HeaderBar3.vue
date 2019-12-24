<!--
 * @Author: your name
 * @Date: 2019-12-23 10:40:40
 * @LastEditTime : 2019-12-24 13:07:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\HeaderBar3.vue
 -->
<template>
<div class="wrapper">
  <div class="title">
      {{baseData.title}}
  </div>
  <div class="right">
    <div v-if="baseData.right">{{baseData.right}}</div>
      <van-icon v-if="baseData.icon" class="icon" :name="baseData.icon" size="0.28rem" />
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderBar3',
  props: {
    msg: String,
    baseData: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';
  .wrapper {
      position relative;
      left 0
      top 0
      height navHeight
      background-color baseColor
      color #fff
    //   border 1px solid red
      .title {
          position absolute
          top 0%;
          left 0.1rem;
          width 1rem
          height navHeight
          line-height navHeight
        //   margin-top navHeight * 1 * (-1)
      }
      .right {
          position absolute;
          top 0%
          // width 0.8 * navHeight 
          height 0.8 * navHeight
          line-height navHeight
          right 0.1rem
          font-size fontSizeMin
          // border 1px solid red
          .icon {
              margin-top 15%
              width 100%
              height 100%
              // border 1px solid yellow
          }
      }
  }
</style> 
