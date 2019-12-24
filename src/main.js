/*
 * @Author: your name
 * @Date: 2019-11-04 15:46:23
 * @LastEditTime : 2019-12-24 13:52:27
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vant from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vant/lib/index.css'
Vue.use(vant)
import '@/assets/reset.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
