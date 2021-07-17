import Layout from '../views/layout/Layout.vue'

export default [
  {
    path: '/es6',
    redirect: '/demo1'
  },
  {
    path: '/demo1',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'demo1',
        component: () => import('../views/demo/demo1/Demo1.vue'),
        children: [
          {
            path: 'foo',
            name: 'demo1foo',
            component: () => import('../views/demo/demo1/Foo.vue')
          },
          {
            path: 'bar',
            name: 'demo1bar',
            component: () => import('../views/demo/demo1/Bar.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/demo2',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'demo2',
        component: () => import('../views/demo/demo2/Demo2.vue'),
        children: [
          {
            path: 'foo',
            name: 'demo2foo',
            meta: {
              text: 'this is meta test.'
            },
            component: () => import('../views/demo/demo2/Foo.vue')
          },
          {
            path: 'bar/:test',
            name: 'demo2bar',
            component: () => import('../views/demo/demo2/Bar.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/demo3',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'demo3',
        component: () => import('../views/demo/demo3/Demo3.vue'),
        children: [
          {
            path: 'foo',
            name: 'demo3foo',
            component: () => import('../views/demo/demo3/Foo.vue')
          },
          {
            path: 'bar',
            name: 'demo3bar',
            component: () => import('../views/demo/demo3/Bar.vue'),
            beforeEnter: (to, from, next) => {
              // eslint-disable-next-line no-console
              console.log('beforeEnter')
              next()
            }
          }
        ]
      }
    ]
  },
  {
    path: '/demo4',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'demo4',
        component: () => import('../views/demo/demo4/Demo4.vue'),
        children: [
          {
            path: 'foo',
            name: 'demo4foo',
            component: () => import('../views/demo/demo4/Foo.vue')
          },
          {
            path: 'bar',
            name: 'demo4bar',
            component: () => import('../views/demo/demo4/Bar.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/arr',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'arr',
        component: () => import('../views/demo/arr/arr.vue')
      }
    ]
  },
  {
    path: '/obj',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'obj',
        component: () => import('../views/demo/obj/obj.vue')
      }
    ]
  },
  {
    path: '/set',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'set',
        component: () => import('../views/demo/set/set.vue')
      }
    ]
  },
  {
    path: '/map',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'map',
        component: () => import('../views/demo/map/map.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
