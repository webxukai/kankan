<template>
  <div class="o-t-wrapper">
    <div class="left">
      <div class="top">
        <div class="title">呵呵</div>
        <div class="name">许大狗</div>
      </div>
      <div class="content">
        <div>暗香浮动月黄昏。</div>
      </div>
    </div>
    <div class="right">
      <img src="@/static/img/3.jpg" alt />
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
  right: 0;
  display: flex;
  justify-content: flex-end;
  margin: 0.1rem 0;

  .left {
    width: 60%;

    .top {
      display: flex;
      justify-content: flex-end;
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
      float: right;
      margin-top: 0.05rem;
      padding: 0.1rem;
      display: inline-block;
      background-color: baseColor;
      font-size: fontSizeSmall;
      color: #ffffff;
      text-align: right;

      &::after {
        position: absolute;
        top: 10%;
        right: -0.15rem;
        display: inline-block;
        content: '';
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-left-color: baseColor;
      }
    }
  }

  .right {
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
}
</style> 