<!--
 * @Author: your name
 * @Date: 2019-12-20 14:47:13
 * @LastEditTime : 2019-12-23 10:11:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\Add.vue
 -->
<template>
  <div class="wrapper" :style="style">
    <!-- @mousedown="bingMousedowm" @mousemove="bindMousemove" @mouseup="bindMouseup" -->
    <svg
      t="1576824853399"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3229"
      width="32"
      height="32"
    >
      <path
        d="M914.618182 477.090909H546.909091V109.381818c0-18.618182-16.290909-34.909091-34.909091-34.909091s-34.909091 16.290909-34.909091 34.909091v367.709091H109.381818c-18.618182 0-34.909091 16.290909-34.909091 34.909091s16.290909 34.909091 34.909091 34.909091h367.709091v367.709091c0 18.618182 16.290909 34.909091 34.909091 34.909091s34.909091-16.290909 34.909091-34.909091V546.909091h367.709091c18.618182 0 34.909091-16.290909 34.909091-34.909091s-16.290909-34.909091-34.909091-34.909091z"
        fill="#379bff"
        p-id="3230"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      style: {
        right: "0.1rem",
        bottom: "0.8rem",
      },

      isDown: false
    };
  },
  props: {
    msg: String
  },
  methods: {
    // bingMousedowm(e) {
    //   //获取x坐标和y坐标
    //   x = e.clientX;
    //   y = e.clientY;

    //   //获取左部和顶部的偏移量
    //   l = dv.offsetLeft;
    //   t = dv.offsetTop;
    //   //开关打开
    //   this.isDown = true;
    //   //设置样式
    // //   dv.style.cursor = "move";
    // },
    // bindMousemove(e) {
    //   if (this.isDown == false) {
    //     return;
    //   }
    //   //获取x和y
    //   var nx = e.clientX;
    //   var ny = e.clientY;
    //   //计算移动后的左偏移量和顶部的偏移量
    //   var nl = nx - (x - l);
    //   var nt = ny - (y - t);

    //   this.style.left = nl + "px";
    //   this.style.top = nt + "px";
    // },
    // bindMouseup(e) {
    //   //开关关闭
    //   isDown = false;
    //   this.style.cursor = "default";
    // }
  },
  mounted() {
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.wrapper {
  position: fixed;
  right: 0.1rem;
  bottom: 2 * navHeight;
  width: navHeight;
  height: navHeight;
  border-radius: 50%;
  z-index: 999999;
  background-color: lowBGC;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -40%;
    transform: translateX(-50%);
    width: 80%;
    height: 80%;
  }
}
</style> 