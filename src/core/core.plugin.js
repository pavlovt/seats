import * as form from '../parts/form'
import store from '../store/index.store'

export default {
  install(Vue, options) {
    // register methods and hooks in all app components
    Vue.mixin({
      created() {
        // add the store to each component
        this.s = store
      },
      methods: {
        
      }
    })

    // register all form components
    _(form).forIn((val, key) => {
      Vue.component(key, val)
    })
    
    // register filter
    Vue.filter('capitalize', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })
  }
}