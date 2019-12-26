<!--
 * @Author: your name
 * @Date: 2019-12-25 15:21:54
 * @LastEditTime : 2019-12-25 16:08:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\UserDiscuss.vue
 -->
<template>
  <div class="u-d-wrapper border-1">
    <div class="left">
      <img src="@/static/img/1.jpg" alt />
    </div>
    <div class="right">
      <div class="top">
        <div class="name">用户123</div>
        <div class="good">
          <van-icon class="icon" name="good-job-o" />
          <span>60</span>
        </div>
      </div>
      <div class="content">呵呵呵? 疏影横斜水清浅,暗香浮动月黄昏。</div>
      <div class="bottom">
        <span class="time">12-20 20:21</span>
        <div class="reply">12回复</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDiscuss",
  props: {
    msg: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.u-d-wrapper {
  position: relative;
  display: flex;
  padding: 0.1rem 0;

  // border: 1px solid red;
  .left {
    position: relative;
    width: 20%;

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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
		width 80%;

    .top {
      display: flex;
      justify-content: space-between;
      font-size: fontSizeSmall;
      padding: 0.02rem 0;

      .name {
        color: baseColor;
      }

      .good {
        .icon {
          position: relative;
          top: 0.03rem;
        }

        span {
          font-size: fontSizeMin;
        }
      }
    }

    .content {
      padding: 0.06rem 0;
      font-size: fontSizeSmall;
    }

    .bottom {
      display: flex;
      padding: 0.02rem 0;
      font-size: fontSizeMin;

      .time {
        padding: 0.02rem 0rem;
      }

      .reply {
        padding: 0.02rem 0.1rem;
        margin: 0 0.1rem;
        border-radius: fontSizeMin;
        background-color: lowBGC;
      }
    }
  }
}
</style> 
