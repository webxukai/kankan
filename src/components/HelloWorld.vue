<!--
 * @Author: your name
 * @Date: 2019-11-04 15:46:23
 * @LastEditTime : 2019-12-23 15:34:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\components\HelloWorld.vue
 -->
<template>
<div>
  HelloWorld
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

// <template>
// <div>
//   <HeaderBar3 :baseData = "headerBar" />
//   <BSContent>
//       登录
//   </BSContent>
// </div>
// </template>

// <script>
// import HeaderBar3 from '@/components/HeaderBar3.vue';
// import BSContent from '@/components/BSContent.vue';
// export default {
//   name: 'Login',
//   props: {
//     msg: String
//   },
//   components: {
//       HeaderBar3,
//       BSContent
//   },
//   data() {
//       return {
//           headerBar: {
//               title:"登录"
//           }
//       }
//   },
// }
// </script>

// <style lang="stylus" scoped>
// @import '~@/assets/stylus.styl';
  
// </style> 


</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus.styl';
  
</style> 


