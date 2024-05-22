import { __dynamicImportComponent__ } from '@/packages/uni-simple-router'

export const routes = [
  {
    path: `/`,
    component: __dynamicImportComponent__(`@/pages/login/index.vue`, {
      pageType: `top`
    })
  },
  {
    path: '/home',
    name: 'home',
    component: __dynamicImportComponent__(`@/layout/base/global-tabbar-view.vue`, {
      pageType: `top`,
      style: {
        navigationStyle: 'custom',
        enablePullDownRefresh: false,
        disableScroll: false,
        'app-plus': {
          bounce: 'none'
        }
      }
    }),
    children: [
      {
        path: 'workspace',
        name: 'workspace',
        component: __dynamicImportComponent__('@/pages/workspace/index.vue')
      },
      {
        path: 'inbox',
        name: 'inbox',
        component: __dynamicImportComponent__('@/pages/inbox/index.vue')
      },
      {
        path: 'setting',
        name: 'setting',
        component: __dynamicImportComponent__('@/pages/setting/index.vue')
      }
    ]
  },
  {
    path: '/blank',
    component: __dynamicImportComponent__(`@/layout/blank/global-blank-view.vue`, {
      pageType: `top`,
      style: {
        navigationStyle: 'custom',
        enablePullDownRefresh: false,
        disableScroll: false,
        'app-plus': {
          bounce: 'none'
        }
      }
    }),
    children: [
      {
        path: 'todo',
        name: 'todo',
        component: __dynamicImportComponent__('@/pages/todo/index.vue'),
        meta: {
          title: '工作台'
        }
      }
    ]
  }
]
