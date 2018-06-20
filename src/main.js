// import 'jquery'
import Vue from 'vue'
import corePlugin from './core/core.plugin'
import store from './store/index.store'
window.s = store
Vue.use(corePlugin)
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import global from './core/global'

import * as form from './el/form'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
