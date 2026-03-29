import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/presidents'
  },
  {
    path: '/presidents',
    name: 'PresidentsList',
    component: () => import('@/views/PresidentsList.vue')
  },
  {
    path: '/presidents/:id',
    name: 'PresidentDetail',
    component: () => import('@/views/PresidentDetail.vue')
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/Timeline.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
