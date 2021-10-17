export default [
  {
    path: '/dataVisualBundle',
    component: () => import(/* webpackChunkName:"app-bundle" */ '@/DataVisualBundle/views'),
    redirect: { name: 'dataVisualSummary' },
    children: [
      {
        path: 'summary',
        name:'dataVisualSummary',
        component: () => import(/* webpackChunkName:"app-bundle" */ '@/DataVisualBundle/views/component/summary'),
      },
      {
        path: 'svg',
        name:'dataVisualSvg',
        component: () => import(/* webpackChunkName:"app-bundle" */ '@/DataVisualBundle/views/component/svg'),
      },
      {
        path: 'canvas',
        name:'dataVisualCanvas',
        component: () => import(/* webpackChunkName:"app-bundle" */ '@/DataVisualBundle/views/component/canvas'),
      },
    ]
  }
]
