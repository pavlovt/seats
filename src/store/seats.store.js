import {observable, action, computed} from 'mobx'

class SeatsStore {
    @observable
    seats = [{
      id: "1",
      position: 'position: absolute; left: 270px; top: 280px; z-index: 10; transform: rotate(-5.4367rad);',
      assignee: 'Valeri Hristov',
      workPlaceNumber: 39
    }, 
    {
      id: "2",
      position: 'position: absolute; left: 350px; top: 140px; z-index: 10;',
      assignee: 'Todor Pavlov',
      workPlaceNumber: 1
    },
    {
      id: "3",
      position: 'position: absolute; left: 250px; top: 140px; z-index: 10;',
      assignee: 'Trifon Trifonov',
      workPlaceNumber: 100
    }]

    @observable
    selectedSeat = {}

    @action.bound
    setSelectedSeat(seatId) {
      this.selectedSeat = _.cloneDeep(_.find(this.seats, s => s.id == seatId))
    }

    @action.bound
    updateSelectedSeat(seat, afterSeatSavedHandler) {
      if (_.isNaN(seat.id) || _.isNil(seat.id)) {
        seat.id = _.uniqueId('seat-')
        this.seats = _.concat(this.seats, _.cloneDeep(seat))
      }

      const updatedSeat = _.find(this.seats, s => s.id == seat.id)
      _.extend(updatedSeat, seat);

      if (!_.isNil(afterSeatSavedHandler) && _.isFunction(afterSeatSavedHandler)) {
        afterSeatSavedHandler(seat.id)
      }
    }

    @action.bound
    deleteSeat(seatId) {
      _.remove(this.seats, s => s.id === seatId)
    }
}

export default SeatsStore