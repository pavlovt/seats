const state = {

}

const actions = {
	login(username, password) {
		return api.get('/login', {username, password})
	}
}

const getters = {
	
}

const mutations = {
	
}

export default {namespaced: true, state, actions, getters, mutations};