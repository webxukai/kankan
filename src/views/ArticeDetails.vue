<!--
 * @Author: your name
 * @Date: 2019-12-25 13:34:05
 * @LastEditTime : 2019-12-25 15:55:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\views\ArticeDetails.vue
 -->
<template>
  <div>
    <HeaderBar3 :baseData="headerBar" />
    <DiscussBar class="discuss-bar" />
    <BSContent class="b-s-content">
      <div class="title">上海排第六! 2019世界一线城市排名公布</div>
      <UserCard />
      <div>
        杨烁回应教育争议 教娃不把控好度是很可怕的
        对儿子冷嘲热讽伤孩子自尊?杨烁回应教育方式争议杨烁军训式带娃被群嘲据悉，杨烁对于自己的儿子杨雨辰是近乎“杨家军”式的训练管理模式，比如即使身处高原也要让年幼的儿子努力跟上他的脚步。对于儿子做的不对的地方，在大庭广众之下严厉训导；若走路方式出现问题，则让其跑回原地重新走；并且还在儿子不小心选到环境相对最不好的房间时，态度非常严肃。
      </div>
      <UserDiscuss />
      <UserDiscuss />
      <UserDiscuss />
      <UserDiscuss />
      <UserDiscuss />
    </BSContent>
  </div>
</template>

<script>
import HeaderBar3 from "@/components/HeaderBar3.vue";
import BSContent from "@/components/BSContent.vue";
import UserCard from "@/components/UserCard.vue";
import DiscussBar from "@/components/DiscussBar";
import UserDiscuss from "@/components/UserDiscuss";
export default {
  name: "ArticeDetails",
  props: {
    msg: String
  },
  components: {
    HeaderBar3,
    BSContent,
    UserCard,
    DiscussBar,
    UserDiscuss
  },
  data() {
    return {
      headerBar: {
        title: "详情"
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';

.b-s-content {
  box-sizing: border-box;
  padding: 0.1rem;

  .title {
    box-sizing: border-box;
    padding: 0.1rem;
    font-weight: 600;
    font-size: fontSizeBig;
    text-align: center;
  }

  .discuss-bar {
    width: 100%;
  }
}
</style> 