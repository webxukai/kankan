<!--
 * @Author: your name
 * @Date: 2019-12-18 17:14:45
 * @LastEditTime : 2019-12-18 17:18:27
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
            <!-- <img class="item-img" src="" alt=""> -->
            <!-- <svg
              t="1576720109152"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6284"
              width="32"
              height="32"
            >
              <path
                d="M938.667 832l-853.333 0 0-618.667 853.333 0 0 618.667zM128 789.333l768 0 0-533.333-768 0 0 533.333zM85.333 642.667l276.011-278.656 336.661 323.328-39.68-95.68 110.848-101.163 169.493 165.504 0 154.667-853.333-2.667z"
                p-id="6285"
              />
            </svg>-->
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
      justify-content: space-around;

      .item {
        position: relative;
        width: 0.5rem;
        height: 0.5rem;
        margin: 0 0.2rem;

        // border: 1px solid green;
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