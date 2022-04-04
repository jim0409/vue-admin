import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/app-layout.vue'

import RouteViewComponent from './route-view.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:catchAll(.*)",
    redirect: { name: 'dashboard' },
  },
  {
    name: 'admin',
    path: '/admin',
    component: AppLayout,
    children: [
      {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/pages/admin/dashboard/Dashboard.vue'),
      }
    ]
  },
  {
    name: 'tables',
    path: '/tables',
    component: AppLayout,
    children: [

      {
        name: 'table',
        path: 'table',
        component: () => import('@/pages/admin/tables/tables.vue')
      }, {
        name: 'table2',
        path: 'table2',
        component: () => import('@/pages/admin/tables/tables.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //  mode: process.env.VUE_APP_ROUTER_MODE_HISTORY === 'true' ? 'history' : 'hash',
  routes
})

export default router
