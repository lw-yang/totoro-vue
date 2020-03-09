import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../layout/Layout";
import user from "./user";
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children:[
      {
        path: '/home',
        name: 'Home',
        meta: {tree: 1},
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
      },
      {
        path: '/category',
        name: 'Category',
        meta: {tree: 10},
        component: () => import(/* webpackChunkName: "category" */ '@/views/Category.vue')
      },
      {
        path: '/message',
        name: 'Message',
        meta: {tree: 20},
        component: () => import(/* webpackChunkName: "message" */ '@/views/Message.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        meta: {tree: 30},
        component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue')
      },
      {
        path: '/user',
        name: 'User',
        meta: {tree: 40},
        component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue')
      }
    ]
  },
  ...user
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 路由跳转前进后退动画
router.beforeEach((to, from, next) => {
  store.commit('setTransition', '')
  if (from.meta.tree > to.meta.tree) {
    // 后退,右滑动
    store.commit('setTransition', 'van-slide-right')
  } else if (from.meta.tree < to.meta.tree) {
    // 前进,左滑动
    store.commit('setTransition', 'van-slide-left')
  } else {
    // store.commit('changeTransition', 'van-fade')
  }
  next()
})

export default router
