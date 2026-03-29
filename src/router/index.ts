import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/presidents'
  },
  {
    path: '/presidents',
    name: 'PresidentList',
    component: () => import('../views/PresidentList.vue')
  },
  {
    path: '/presidents/:id',
    name: 'PresidentDetail',
    component: () => import('../views/PresidentDetail.vue'),
    props: true
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/TimelineView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
