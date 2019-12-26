<!--
 * @Author: your name
 * @Date: 2019-12-25 17:34:23
 * @LastEditTime : 2019-12-26 13:52:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\views\MessageTalk.vue
 -->
<template>
  <div>
    <HeaderBar3 :baseData="headerBar" />
    <TalkBar />
    <BSContent class="b-s-content">
      <OthersTalk />
      <OthersTalk />
      <OthersTalk />
      <OthersTalk />

      <MyTalk />
      <MyTalk />
      <MyTalk />
      <MyTalk />
      <MyTalk />
      <MyTalk />
    </BSContent>
  </div>
</template>

<script>
import HeaderBar3 from "@/components/HeaderBar3.vue";
import BSContent from "@/components/BSContent.vue";
import OthersTalk from "@/components/OthersTalk.vue";
import MyTalk from "@/components/MyTalk.vue";
import TalkBar from "@/components/TalkBar.vue";
export default {
  name: "Login",
  props: {
    msg: String
  },
  components: {
    HeaderBar3,
    BSContent,
    OthersTalk,
    MyTalk,
    TalkBar
  },
  data() {
    return {
      headerBar: {
        title: "聊天"
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.b-s-content {
  height: 'calc(100vh - 4* %s)' % navHeight;
}
</style> 