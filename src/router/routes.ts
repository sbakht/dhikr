import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    name: 'profile',
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }]
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/About.vue') }]
  },
  {
    name: 'result',
    path: '/result',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Results.vue') }]
  },
  {
    name: 'practice',
    path: '/practice',
    component: () => import('layouts/Practice.vue'),
    children: [{ path: '', component: () => import('pages/Results.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
