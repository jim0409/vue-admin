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
      children: []
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
          name: 'markup',
          displayName: 'menu.markupTables',
          children: [
            {
              name: 'markup',
              displayName: 'menu.markupTables',
            },
            {
              name: 'markup',
              displayName: 'menu.markupTables',
            },
          ],
        },
      ],
    },
  ],
}
