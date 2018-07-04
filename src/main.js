// import 'jquery'
import Vue from 'vue'
import corePlugin from './core/core.plugin'
Vue.use(corePlugin)
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VeeValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
