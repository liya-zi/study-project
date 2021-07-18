export default [
  {
    path: '/fragmentBundle',
    component: () => import(/* webpackChunkName:"app-bundle" */ '@/FragmentBundle/views/index')
  }
]
