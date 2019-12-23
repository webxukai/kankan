<!--
 * @Author: your name
 * @Date: 2019-11-04 16:10:50
 * @LastEditTime : 2019-12-23 13:41:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\views\Message.vue
 -->

<template>
  <div>
    <HeaderBar3 />
    <BSContent class="b-s-content">
      <div class="padding-10"></div>
      <MessageCard v-for="item in messageList" :key="item.id" :baseData="item" />
    </BSContent>
  </div>
</template>

<script>
import HeaderBar3 from "@/components/HeaderBar3.vue";
import BSContent from "@/components/BSContent.vue";
import MessageCard from "@/components/MessageCard.vue";
export default {
  name: "Message",
  props: {
    msg: String
  },
  components: {
    HeaderBar3,
    BSContent,
    MessageCard
  },
  data() {
    return {
      messageList: [
        {
          id: 1,
          name: "折扇",
          message: "折扇花无眠",
          number: "2",
          time: "刚刚",
          img: require("@/static/img/1.jpg")
        },
        {
          id: 2,
          name: "呵呵狗",
          message: "呵呵一笑很倾城",
          number: "4",
          time: "刚刚",
          img: require("@/static/img/2.jpg")
        },
        {
          id: 3,
          name: "黄忠",
          message: "来自长者的慈爱关怀已进了炮膛，好好感受一下温暖。",
          number: "21",
          time: "刚刚",
          img: require("@/static/img/3.jpg")
        },
        {
          id: 4,
          name: "河池邀月",
          message: "疏影横斜水清浅，暗香浮动月黄昏。",
          number: "99+",
          time: "刚刚",
          img: require("@/static/img/4.jpg")
        },
        {
          id: 5,
          name: "折扇",
          message: "折扇花无眠",
          number: "2",
          time: "刚刚",
          img: require("@/static/img/5.jpg")
        },
        {
          id: 6,
          name: "呵呵狗",
          message: "呵呵一笑很倾城",
          number: "4",
          time: "刚刚",
          img: require("@/static/img/6.jpg")
        },
        {
          id: 7,
          name: "黄忠",
          message: "来自长者的慈爱关怀已进了炮膛，好好感受一下温暖。",
          number: "21",
          time: "刚刚",
          img: require("@/static/img/7.jpg")
        },
        {
          id: 8,
          name: "河池邀月",
          message: "疏影横斜水清浅，暗香浮动月黄昏。",
          number: "99+",
          time: "刚刚",
          img: require("@/static/img/8.jpg")
        },
        {
          id: 9,
          name: "折扇",
          message: "折扇花无眠",
          number: "2",
          time: "刚刚",
          img: require("@/static/img/9.jpg")
        },        {
          id: 11,
          name: "折扇",
          message: "折扇花无眠",
          number: "2",
          time: "刚刚",
          img: require("@/static/img/1.jpg")
        },
        {
          id: 12,
          name: "呵呵狗",
          message: "呵呵一笑很倾城",
          number: "4",
          time: "刚刚",
          img: require("@/static/img/2.jpg")
        },
        {
          id: 13,
          name: "黄忠",
          message: "来自长者的慈爱关怀已进了炮膛，好好感受一下温暖。",
          number: "21",
          time: "刚刚",
          img: require("@/static/img/3.jpg")
        },
        {
          id: 14,
          name: "河池邀月",
          message: "疏影横斜水清浅，暗香浮动月黄昏。",
          number: "99+",
          time: "刚刚",
          img: require("@/static/img/4.jpg")
        },
        {
          id: 15,
          name: "折扇",
          message: "折扇花无眠",
          number: "2",
          time: "刚刚",
          img: require("@/static/img/5.jpg")
        },
        {
          id: 16,
          name: "呵呵狗",
          message: "呵呵一笑很倾城",
          number: "4",
          time: "刚刚",
          img: require("@/static/img/6.jpg")
        },
        {
          id: 17,
          name: "黄忠",
          message: "来自长者的慈爱关怀已进了炮膛，好好感受一下温暖。",
          number: "21",
          time: "刚刚",
          img: require("@/static/img/7.jpg")
        },
        {
          id: 18,
          name: "河池邀月",
          message: "疏影横斜水清浅，暗香浮动月黄昏。",
          number: "99+",
          time: "刚刚",
          img: require("@/static/img/8.jpg")
        },
        {
          id: 19,
          name: "折扇",
          message: "折扇花无眠",
          number: "2",
          time: "刚刚",
          img: require("@/static/img/9.jpg")
        },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.b-s-content {
  box-sizing: border-box;
  padding: 0 0.1rem;
}
</style> 
