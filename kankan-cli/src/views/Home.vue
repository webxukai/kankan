<!--
 * @Author: your name
 * @Date: 2019-11-04 16:10:50
 * @LastEditTime : 2019-12-25 13:36:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\views\Home.vue
 -->
<template>
  <div class="wrapper">
    <van-popup v-model="popupShow" position="bottom" :style="{ height: '2.5rem' }">
      <AddSwiper />
    </van-popup>
    <HeaderBar2 />
    <RowBread class="row-bread-wrapper border-1" />
    <Add v-show="!popupShow" @click.native="bindAddClick" />
    <BSContent class="b-s-content-wrapper">
      <router-link to="/articeDetails">
        <HotPlate
          class="hot-plate-wrapper border-1"
          v-for="item in hotPlate"
          :key="item.id"
          :baseData="item"
        />
      </router-link>

      <div class="border-10"></div>
    </BSContent>
  </div>
</template>

<script>
import HeaderBar2 from "@/components/HeaderBar2.vue";
import RowBread from "@/components/RowBread.vue";
import BSContent from "@/components/BSContent.vue";
import HotPlate from "@/components/HotPlate.vue";
import Add from "@/components/Add.vue";
import AddSwiper from "@/components/AddSwiper.vue";
export default {
  name: "home",
  components: {
    HeaderBar2,
    BSContent,
    RowBread,
    HotPlate,
    Add,
    AddSwiper
  },
  data() {
    return {
      hotPlate: [
        {
          id: 1,
          title: "澳门回归20周年",
          img: [
            require("@/static/img/1.jpg"),
            require("@/static/img/2.jpg"),
            require("@/static/img/3.jpg")
          ],
          StickFlag: true,
          author: "中文网",
          comment: "123",
          time: "1577084985350"
        },
        {
          id: 2,
          title: "高铁试点电子客票",
          img: [
            require("@/static/img/4.jpg"),
            require("@/static/img/5.jpg"),
            require("@/static/img/6.jpg")
          ],
          StickFlag: true,
          author: "掘金网",
          comment: "23",
          time: "1577085057608"
        },
        {
          id: 3,
          title:
            "Stylus是一款能改变网站样式的样式管理器，该插件主要能将他人提供的网页",
          img: [
            require("@/static/img/7.jpg"),
            require("@/static/img/8.jpg"),
            require("@/static/img/9.jpg")
          ],
          StickFlag: false,
          author: "知乎网",
          comment: "1233",
          time: "1577085017608"
        },
        {
          id: 4,
          title: "澳门回归20周年",
          img: [
            require("@/static/img/2.jpg"),
            require("@/static/img/5.jpg"),
            require("@/static/img/8.jpg")
          ],
          StickFlag: true,
          author: "中文网",
          comment: "123",
          time: "1577025057608"
        },
        {
          id: 5,
          title: "澳门回归20周年",
          img: [
            require("@/static/img/9.jpg"),
            require("@/static/img/3.jpg"),
            require("@/static/img/6.jpg")
          ],
          StickFlag: true,
          author: "中文网",
          comment: "123",
          time: "1577085457608"
        },
        {
          id: 6,
          title: "澳门回归20周年",
          img: [
            require("@/static/img/7.jpg"),
            require("@/static/img/1.jpg"),
            require("@/static/img/9.jpg")
          ],
          StickFlag: true,
          author: "中文网",
          comment: "123",
          time: "1577085027608"
        },
        {
          id: 7,
          title: "澳门回归20周年",
          img: [
            require("@/static/img/5.jpg"),
            require("@/static/img/1.jpg"),
            require("@/static/img/4.jpg")
          ],
          StickFlag: true,
          author: "中文网",
          comment: "123",
          time: "1577085017608"
        }
      ],
      popupShow: false
    };
  },
  methods: {
    bindAddClick() {
      this.popupShow = true;
    }
  },
  mounted: function() {}
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.wrapper {
  // border 1px solid red
  .row-bread-wrapper {
    position: fixed;
    top: navHeight;
  }

  .b-s-content-wrapper {
    position: relative;
    top: 2 * navHeight;
    height: 'calc(100vh - 3* %s)' % navHeight;

    // background-color #999
    // border 1px solid red
    .hot-plate-wrapper {
      // border 1px solid red
    }
  }
}
</style>
