/*
 * @Author: your name
 * @Date: 2019-11-04 16:10:50
 * @LastEditTime : 2019-12-19 11:00:25
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \kankan\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('@/views/About.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/My.vue')
  },
  {
    path: '/commonTools',
    name: 'my',
    component: () => import('@/views/CommonTools.vue')
  },
  {
    path: '/discover',
    name: 'my',
    component: () => import('@/views/Discover.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router