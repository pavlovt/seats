import {observable, action} from 'mobx'

class SeatsStore {
    @observable
    seats = [
      'position: absolute; left: 270px; top: 180px; z-index: 10; transform: rotate(-5.4367rad);',
      'position: absolute; left: 550px; top: 140px; z-index: 10;',
      'position: absolute; left: 550px; top: 140px; z-index: 10;'
    ]
}

export default new SeatsStore()