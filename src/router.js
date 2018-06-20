import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home.page.vue'
import About from './pages/about.page.vue'
import Login from './pages/login.page.vue'
import NotFound from './pages/notfound.page.vue'

import head from './core/head'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {title: 'Home'},
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {title: 'About'},
      component: About
    },
    {
      path: '/login',
      name: 'login',
      meta: {title: 'Login'},
      component: Login
    },
    {
      path: '*',
      name: 'notfound',
      meta: {title: 'Login'},
      component: NotFound
    }
  ]
})

export default router

// var context = require.context('./pages', true, /^(?!.*index).*\/(?!.*test).*\.vue$/);
// var context = require.context('.', true, /^.*\.page\.vue$/);
// console.log(context.keys())
// console.log(context("./login.page.vue"))
// const pages = _(context.keys()).map(v => context(v).default).value()
/*const pages = _(context.keys()).map(v => import from v).value()
console.log(_(pages).map(page => ({
  path: page.path,
  name: page.name,
  meta: {title: page.title},
  component: page
})).value())
const router = new Router({routes: _(pages).map(page => ({
  path: page.path,
  name: page.name,
  meta: {title: page.title || ''},
  component: page
})).value()})*/

router.beforeEach((to, from, next) => {
  // console.log('router hook', from, to, this)
  head.update({title: to.meta.title})
  next()
})