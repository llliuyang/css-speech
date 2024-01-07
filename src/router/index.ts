import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
import AppLayout from '@/layout/AppLayout.vue'
import ViewLayout from "@/layout/ViewLayout.vue"

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/view',
    component: ViewLayout,
    name: 'view',
    children: [
      {
        path: 'border-blobk',
        component: () => import('@/views/border-block/index.vue'),
        name: 'BorderBlock',
        meta: {
          title: 'Border Block'
        }
      },
      {
        path: 'css-tips',
        component: () => import('@/views/css-tips/index.vue'),
        name: 'CssTips',
        meta: {
          title: 'Css Tips'
        }
      }
    ]
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