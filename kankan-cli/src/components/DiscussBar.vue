<!--
 * @Author: your name
 * @Date: 2019-12-25 14:26:31
 * @LastEditTime : 2019-12-25 15:12:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\DiscussBar.vue
 -->
<template>
  <div class="d-b-wrapper">
    <div class="input-wrapper">
      <div class="text">吐槽一下吧...</div>
    </div>

    <van-icon class="icon" size="24" name="chat-o" info="9" />
    <van-icon class="icon" size="24" name="star-o" />
    <van-icon class="icon" size="24" name="good-job-o" />
    <van-icon class="icon" size="24" name="share" />
  </div>
</template>

<script>
export default {
  name: "DiscussBar",
  props: {
    msg: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.d-b-wrapper {
  box-sizing: border-box;
  position: fixed;
  display: flex;
  justify-content: space-between;
	align-items center;
  bottom: navHeight;
  height: navHeight;
	width 100%;
	padding 0 0.1rem;
  background-color: #ffffff;
  z-index: 999999;

  .input-wrapper {
    position: relative;
    width: 50%;
    height: 100%;

    .text {
      position: absolute;
      top: 50%;
      padding-left: 0.5 * navHeight;
      transform: translateY(-50%);
      width: 80%;
      height: 0.8 * navHeight;
      line-height: @height;
      font-size: fontSizeSmall;
      border-radius: 0.8 * navHeight;
      background-color: lowBGC;
    }
  }

  .icon {
    width: 0.6 * navHeight;
    height: @width;
  }
}
</style> 