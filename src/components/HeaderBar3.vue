<!--
 * @Author: your name
 * @Date: 2019-12-23 10:40:40
 * @LastEditTime : 2019-12-23 11:07:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\HeaderBar3.vue
 -->
<template>
<div class="wrapper">
  <div class="title">
      消息
  </div>
  <div class="right">
      <van-icon class="icon" name="friends-o" size="0.28rem" />
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderBar3',
  props: {
    msg: String
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
          top 10%
          width 0.8 * navHeight 
          height 0.8 * navHeight
          right 0.1rem
        //   border 1px solid red
          .icon {
              width 100%
              height 100%
            //   border 1px solid yellow
          }
      }
  }
</style> 
