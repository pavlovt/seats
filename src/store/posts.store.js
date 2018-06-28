import {observable, action} from 'mobx'

class Model {
    @observable
    posts = []

    @action.bound
    get() {
      return api.get('posts')
      .then(res => this.posts = res)
    }

    @action.bound
    filter(title) {
      return !title? this.posts : this.posts.filter(v => v.title.indexOf(title) > -1)
    }
}

export default new Model()