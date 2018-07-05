import * as form from '../parts/form'
import * as seats from '../parts/seats'
import store from '../store/index.store'

export default {
  install(Vue, options) {
    // Vue.component(MyComponent.name, MyComponent)
    // Vue.directive(MyDirective.name, MyDirective)
    Vue.mixin({
      created() {
        // add the store to each component
        this.s = store
      },
      methods: {
        
      }
    })

    // register all form components
    _(form).forIn((val, key) => Vue.component(key, val))

    // register all seats components
    _(seats).forIn((val, key) => Vue.component(key, val))

    Vue.filter('capitalize', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })
  }
}