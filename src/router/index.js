import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "../layout/Layout";

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
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import(/* webpackChunkName: "category" */ '@/views/Category.vue')
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import(/* webpackChunkName: "message" */ '@/views/Message.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/Cart.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import(/* webpackChunkName: "user" */ '@/views/User.vue')
      }
    ]
  },

  //user
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/user/Register.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "setting" */ '@/views/user/Setting.vue')
  },
  {
    path: '/setting/address',
    name: 'Address',
    component: () => import(/* webpackChunkName: "address" */ '@/views/user/Address.vue')
  },
  {
    path: '/setting/addressAdd',
    name: 'AddressAdd',
    component: () => import(/* webpackChunkName: "addressAdd" */ '@/views/user/AddressAdd.vue')
  },
  {
    path: '/setting/addressEdit',
    name: 'AddressEdit',
    component: () => import(/* webpackChunkName: "addressEdit" */ '@/views/user/AddressEdit.vue')
  },
  {
    path: '/user/qr',
    name: 'Qr',
    component: () => import(/* webpackChunkName: "qr" */ '@/views/user/QrCode.vue')
  },
  {
    path: '/user/coupon',
    name: 'Qr',
    component: () => import(/* webpackChunkName: "qr" */ '@/views/user/Coupon.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
