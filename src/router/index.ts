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
      },
      // 提供額外的 vue-router 路徑，加在這邊~
      {
        name: 'tables',
        path: 'tables',
        component: RouteViewComponent,
        children: [
          {
            name: 'markup',
            path: 'markup',
            component: () => import('@/pages/admin/tables/markup-tables/MarkupTables.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
            },
            children: [
              {
                name: 'markup',
                path: 'markup',
                component: () => import('@/pages/admin/tables/markup-tables/MarkupTables.vue'),
                meta: {
                  wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
                },
              },
            ]
          },
        ]
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
