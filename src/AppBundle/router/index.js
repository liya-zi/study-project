export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName:"app-bundle" */ '@/AppBundle/views/index')
  }
]
