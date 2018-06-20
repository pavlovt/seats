
const state = {
  posts: [1,2,3]
}

const actions = {
	get() {
    return 'zzz'
  }
}

const getters = {
	data: _ => state.posts
}

const mutations = {
	
}

export default {namespaced: true, state, actions, getters, mutations};