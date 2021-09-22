export default  [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    // component: '@/pages/index'
    routes: [
      { path: '/', redirect: '/welcome' },
      {
        path: '/welcome',
        name: 'welcome',
        title: '拉拉',
        component: '@/pages/Welcome/index'
      },
      {
        path: '/management',
        name: 'management',
        // redirect: '/management/list',
        routes: [
          {
            name: 'list',
            path: '/management/list',
            title: '管理列表',
            component: '@/pages/Welcome/index',
          },
        ]
      },
      {
        name: 'app1',
        path: '/app1',
        microApp: 'app1',
        microAppProps: {
          autoSetLoading: true,
        }
      },
      {
        name: 'app2',
        path: '/app2',
        microApp: 'app2',
        title: '应用二',
        microAppProps: {
          autoSetLoading: false,
        }
      },
    ],
  },
];