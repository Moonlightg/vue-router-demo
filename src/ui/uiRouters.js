import Ui from './Ui'
import applyRoutes from './oa/apply/routers'

const children = [
  {
    path: '/ui',
    name: 'Ui',
    component: Ui
  },
  ...applyRoutes.children
]

const roots = [
  ...applyRoutes.roots
]

export default {
  children,
  roots
}
