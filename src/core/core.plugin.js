import * as form from '../el/form'

export default {
  install(Vue, options) {
    // Vue.component(MyComponent.name, MyComponent)
    // Vue.directive(MyDirective.name, MyDirective)
    Vue.mixin({
      created() {
        // add the store to each component
        this.s = window.s
      },
      methods: {
        // run this action for the selected store
        act(action) {
          return this.$store.dispatch('posts/get')
        }
      }
    })

    // register all form components
    _(form).forIn((val, key) => {
      Vue.component(key, val)
    })
    // ({...form}).keys().forEach(key => Vue.component(key, form[key]))

    Vue.filter('capitalize', function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    })
  }
}