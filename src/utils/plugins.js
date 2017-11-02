import Waves from 'node-waves'

export const ScmWavesPlugin = {
  install: function (Vue, option) {
    Waves.init(option)
    Vue.directive('waves', {
      inserted: function (el, bind) {
        var classes = Object.keys(bind.modifiers).map(function (val) {
          return 'waves-' + val
        })
        Waves.attach(el, classes)
      }
    })
  }
}
