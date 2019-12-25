/*
 * @Author: your name
 * @Date: 2019-11-04 16:10:50
 * @LastEditTime : 2019-12-25 13:36:40
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
    path: '/message',
    name: 'message',

    component: () => import('@/views/Message.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/My.vue')
  },
  {
    path: '/commonTools',
    name: 'commonTools',
    component: () => import('@/views/CommonTools.vue')
  },
  {
    path: '/discover',
    name: 'discover',
    component: () => import('@/views/Discover.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/articeDetails',
    name: 'articeDetails',
    component: () => import('@/views/ArticeDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router