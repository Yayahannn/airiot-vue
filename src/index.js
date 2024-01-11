import app, { api } from 'xadmin'
import React from 'react'
import VueWidget from './VueWidget'
import VuePage from './VuePage'
// import 'element-plus/dist/index.css'

import { useVueComponent } from './hooks'

export default app.use({
  name: 'airiot.vue',
  //注册菜单
  menuItems: [
    { title: 'VUE', url: '/app/vue', icon: 'Debug', permission: 'Development.vue' }
  ],
  routers: {
    '/app/': { //注册路由
      path: 'vue',
      breadcrumbName: 'VUE组件',
      component: VuePage
    }
  },
  dashboardWidgets: { //注册画面组件	
    VueWidget
  },
  hooks: {
    vue: useVueComponent
  }
})
