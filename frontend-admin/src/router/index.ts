import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/HomePage.vue'),
    meta: { title: 'Home' }
  },
  {
    path: '/presidents',
    name: 'Presidents',
    component: () => import('@/views/presidents/PresidentsList.vue'),
    meta: { title: 'Presidents' }
  },
  {
    path: '/president/:id',
    name: 'PresidentDetail',
    component: () => import('@/views/detail/PresidentDetail.vue'),
    meta: { title: 'President Detail' }
  },
  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/timeline/TimelinePage.vue'),
    meta: { title: 'Timeline' }
  },
  {
    path: '/mindmap',
    name: 'MindMap',
    component: () => import('@/views/mindmap/MindMapPage.vue'),
    meta: { title: 'Mind Map' }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error/NotFound.vue'),
    meta: { title: 'Not Found' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
