<!--
 * @Author: your name
 * @Date: 2019-12-20 10:52:30
 * @LastEditTime : 2019-12-23 15:16:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\HotPlate.vue
 -->
<template>
  <div class="wrapper">
    <div class="title">{{baseData.title}}</div>
    <div class="img-wrapper">
      <div class="item" v-if="baseData.img[0]">
        <img :src="baseData.img[0]" alt />
      </div>
      <div class="item" v-if="baseData.img[1]">
        <img :src="baseData.img[1]" alt />
      </div>
      <div class="item" v-if="baseData.img[2]">
        <img :src="baseData.img[2]" alt />
      </div>
    </div>
    <div class="bar">
      <span class="active" v-if="baseData.StickFlag">置顶</span>
      <span>{{baseData.author}}</span>
      <span>{{baseData.comment}}评论</span>
      <span>{{time }}</span>
    </div>
  </div>
</template>

<script>
import { updateTimeShow } from "@/util/time.js";
export default {
  name: "HotPlate",
  props: {
    baseData: Object
  },
  computed: {
    time () {
      return updateTimeShow(+this.baseData.time) 
    }
  },
  mounted() {
    
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.wrapper {
  .title {
    padding: 0.06rem 0.1rem 0;
  }

  .img-wrapper {
    display: flex;
    margin: 0.06rem 0.03rem;
    justify-content: space-between;

    .item {
      width: 33%;
      margin: 0 0.03rem;
      height: 0.7rem;

      img {
        width: 100%;
        height: @height;
      }
    }
  }

  .bar {
    padding: 0.06rem 0;
    display: flex;
    justify-content: flex-start;
    font-size: fontSizeMin;

    span {
      margin: 0 0 0 0.1rem;

      &.active {
        color: activeColor;
      }
    }
  }
}
</style> 