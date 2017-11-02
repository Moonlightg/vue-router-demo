import Vue from 'vue'
import Router from 'vue-router'
import PageTransition from '@/components/PageTransition'

import uiRoutes from '@/ui/uiRouters'
import Home from '@/components/home'
import One from '@/components/one'
import Two from '@/components/two'
import Three from '@/components/three'

// 用于记录路由的前进后退状态
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

let routes = [
  {
    path: '/three',
    name: 'Three',
    component: Three
  },
  {
    path: '/',
    name: 'PageTransition',
    component: PageTransition,
    children: [
      {path: '', name: 'Home', component: Home},
      {path: 'one', name: 'One', component: One},
      {path: 'two', name: 'Two', component: Two},
      ...uiRoutes.children
    ]
  },
  ...uiRoutes.roots
]

export default new Router({
  routes
})
