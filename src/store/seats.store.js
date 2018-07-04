import {observable, action} from 'mobx'

class SeatsStore {
    @observable
    seats = [
      'position: absolute; left: 648.5px; top: 264px; transform: rotate(2.35619rad);',
      'position: absolute; left: 948.5px; top: 164px;',
      'position: absolute; left: 148.5px; top: 164px;'
    ]
}

export default new SeatsStore()