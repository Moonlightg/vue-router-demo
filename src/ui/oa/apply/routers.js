import ApplyIndexs from './index'
import ApplyAdds from './add'

const children = [
]
const roots = [
  {
    path: '/ui/oa/apply/index',
    name: 'ApplyIndexs',
    component: ApplyIndexs
  },
  {
    path: '/ui/oa/apply/add',
    name: 'ApplyAdds',
    component: ApplyAdds
  }
]

export default {
  children,
  roots
}
