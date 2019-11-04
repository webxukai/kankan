/*
 * @Author: your name
 * @Date: 2019-11-04 15:46:23
 * @LastEditTime: 2019-11-04 17:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/reset.css'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
