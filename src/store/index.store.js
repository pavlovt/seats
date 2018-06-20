import Vue from 'vue'
import pathify from './pathify'
import Vuex from 'vuex'
import posts from './posts.store'
import auth from './auth.store'
// pathify.debug()

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {posts, auth},
	plugins: [ pathify.plugin ],
  state: {
    z: 1, z2: 2,
  },
  mutations: {

  },
  actions: {
    mainAction() {}
  }
})
