import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import AppLayout from '@/layout/AppLayout.vue'

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/css-tips',
    component: () => import('@/views/css-tips/index.vue'),
    name: 'CssTips',
    meta: {
      title: 'Css Tips'
    }
  },
  {
    path: '/border-blobk',
    component: () => import('@/views/border-blobk/index.vue'),
    name: 'BorderBlock',
    meta: {
      title: 'Border Block'
    }
  }
]

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      title: 'Home'
    }
  }
]

export const routes = [...constantRoutes, ...asyncRoutes]
export default createRouter({
  history: createWebHistory(),
  routes
})