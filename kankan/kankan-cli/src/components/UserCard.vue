<!--
 * @Author: your name
 * @Date: 2019-12-25 13:54:15
 * @LastEditTime : 2019-12-25 14:23:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\UserCard.vue
 -->
<template>
  <div class="u-c-wrapper border-1">
    <!-- <div>img</div> -->
    <img src="@/static/img/1.jpg" alt="">
    <div class="content">
      <div class="name" >腔调楼市</div>
      <div class="bottom">5天前-通策房产资讯服份有限公司策划</div>
    </div>
    <div class="attention">关注</div>

  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    msg: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';
  .u-c-wrapper {
    box-sizing border-box
    position relative
    display flex
    align-items center
    height navHeight

    // border 1px solid red
    img {
      box-sizing border-box
      padding 0.02rem
      width navHeight
      height navHeight
      border-radius 50%
      margin 0 0.02rem
    }
    .content {
      display flex
      flex-direction column
      justify-content space-around
      flex-grow 1
      height navHeight
      padding 0 0.02rem
      .name {
        font-size fontSizeSmall
        font-weight 600
        ellipsis()
        }
      .bottom {
        font-size fontSizeMin
        color grayWeightColor
        ellipsis()
        }
      }
    .attention {
      width 1.4 * navHeight
      height 0.7 * navHeight
      margin 0 0.02rem
      border-radius 0.03rem
      background-color activeColor
      color #ffffff
      font-size fontSizeSmall
      text-align center
      line-height @height
      }
  }
</style> 
