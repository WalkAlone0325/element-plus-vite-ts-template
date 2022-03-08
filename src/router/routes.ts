import type { RouteRecordRaw } from 'vue-router'
import PageLayout from '@/layout/page-layout.vue'
import appRoutes from './modules'

export const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   redirect: 'login'
  // },
  {
    path: '/',
    name: 'root',
    component: PageLayout,
    children: appRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/index.vue')
  }
]
