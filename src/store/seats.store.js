import {observable, action, computed} from 'mobx'

class SeatsStore {
    @observable
    seats = [{
      id: "1",
      x: 338,
      y: 323,
      assignee: 'Valeri Hristov',
      workPlaceNumber: 39
    }, 
    {
      id: "2",
      x: 838,
      y: 123,
      assignee: 'Todor Pavlov',
      workPlaceNumber: 1
    },
    {
      id: "3",
      x: 18,
      y: 23,
      assignee: 'Trifon Trifonov',
      workPlaceNumber: 100
    }]

    @observable
    selectedSeat = {}

    @action.bound
    addEmptySeat(seatX, seatY) {
      const newSeat = {
        id: _.uniqueId('seat-'),
        x: seatX,
        y: seatY,
        assignee: null,
        workPlaceNumber: null
      }

      this.seats = _.concat(this.seats, newSeat)
    }

    @action.bound
    setSelectedSeat(seatId) {
      if (_.isNil(seatId)) {
        return;
      }

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