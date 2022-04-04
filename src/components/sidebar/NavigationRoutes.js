export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    // 要增加新的 side bar 項目，從這邊下手~
    {
      name: 'tables',
      displayName: 'menu.tables',
      meta: {
        icon: 'vuestic-iconset-tables',
      },
      children: [
        {
          name: 'table',
          displayName: 'menu.markupTables',
        },
        {
          name: 'table2',
          displayName: 'menu.markupTables',
        },
      ],
    },
  ]
}
