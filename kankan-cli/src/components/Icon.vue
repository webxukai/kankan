<!--
 * @Author: your name
 * @Date: 2019-12-18 17:14:45
 * @LastEditTime : 2019-12-24 14:39:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\my\Icon.vue
 -->
<template>
  <div class="wrapper">
    <div class="header border-1">
      <div class="title">{{titleText}}</div>
      <router-link :to="'/' + link" v-if="link">
        <div class="router">查看全部 ></div>
      </router-link>
    </div>
    <div class="content">
      <div class="item-wrapper border-1 padding-10" v-for="item in baseData" :key="item.id">
        <div class="item" v-for="itemChild in item.content" :key="itemChild.id">
          <div class="item-img">
            <van-icon class="item-img" :name="itemChild.vanIconName" />
          </div>
          <div class="item-name">{{itemChild.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: {
    baseData: Array,
    titleText: String,
    vanIconName: String,
    link: String
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;

  // border: 1px solid red;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.3rem;
    padding: 0 0.1rem;
    font-size: 0.14rem;

    // border: 1px solid red;
    .title {
      color: #000;
      // border: 1px solid red;
    }

    .router {
      // color #666
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    .item-wrapper {
      display: flex;
      justify-content: flex-start;

      .item {
        position: relative;
        // width: 0.5rem;
        width: 25%;
        height: 0.5rem;
        margin: 0 0.2rem;

        .item-img {
          position: absolute;
          left: 0.08rem;
          height: 0.34rem;
          width: 0.34rem;
          // border: 1px solid red;
        }

        .item-name {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 0.16rem;
          line-height: 0.16rem;
          text-align: center;
          font-size: 0.12rem;
          // border: 1px solid green;
          ellipsis();
        }
      }
    }
  }
}
</style>