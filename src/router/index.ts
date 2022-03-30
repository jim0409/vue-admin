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
      {
        name: 'statistics',
        path: 'statistics',
        component: RouteViewComponent,
        children: [
          {
            name: 'charts',
            path: 'charts',
            component: () => import('@/pages/admin/statistics/charts/Charts.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
            },
          },
          {
            name: 'progress-bars',
            path: 'progress-bars',
            component: () => import('@/pages/admin/statistics/progress-bars/ProgressBars.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Progress-Bars',
            },
          },
        ],
      },
      {
        name: 'forms',
        path: 'forms',
        component: RouteViewComponent,
        children: [
          {
            name: 'form-elements',
            path: 'form-elements',
            component: () => import('@/pages/admin/forms/form-elements/FormElements.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/inputs',
            },
          },
          {
            name: 'medium-editor',
            path: 'medium-editor',
            component: () => import('@/pages/admin/forms/medium-editor/MediumEditor.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Medium-Editor',
            },
          },
        ],
      },
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
          },
          {
            name: 'data',
            path: 'data',
            component: () => import('@/pages/admin/tables/data-tables/DataTables.vue'),
            meta: {
              wikiLink: 'https://github.com/epicmaxco/vuestic-admin/wiki/Tables',
            },
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
