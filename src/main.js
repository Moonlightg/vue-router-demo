// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import {ScmWavesPlugin} from './utils/plugins'
import '../static/styles/base.less'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(ScmWavesPlugin)

/* eslint-disable no-new */
Vue.component('page-header', PageHeader)

Vue.component('page-footer', PageFooter)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
