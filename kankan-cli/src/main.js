/*
 * @Author: your name
 * @Date: 2019-11-04 15:46:23
 * @LastEditTime : 2019-12-27 14:37:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios';
import vant from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'vant/lib/index.css'
Vue.use(vant)
import '@/assets/reset.css'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.base_url = 'http://192.168.43.33:8080/api'
axios.defaults.headers.common['Content-Type'] = "application/json";
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')