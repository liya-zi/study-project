import Vue from 'vue'
import Router from 'vue-router'

// all router
import AppBundleRoutes from '@/AppBundle/router/index'
import Es6BundleRouter from '@/Es6Bundle/router/index'

// 合并所有模块的路由
Vue.use(Router)

const routes = AppBundleRoutes.concat(
  Es6BundleRouter
)

const router = new Router(
  {
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
  }
)

export default router
