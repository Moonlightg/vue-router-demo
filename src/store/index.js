import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import sales from '../sales'
import menus from '../menus'
import order from '../order'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  menus,
  header: {
    returnUrl: false
  },
  tips: {
    title: '',
    type: '',
    show: false,
    msg: ''
  },
  isRouteBack: false
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    order: order.store,
    sales: sales.store
  },
  strict: debug
})
// console.log(store.state)
export default store

const initialStateCopy = JSON.parse(JSON.stringify(store.state))
export function resetState () {
  store.replaceState(JSON.parse(JSON.stringify(initialStateCopy)))
}
