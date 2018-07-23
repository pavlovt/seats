import {observable, action, computed} from 'mobx'

class SeatsStore {
    @observable
    seats = []

    @observable
    selectedSeat = {}

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
      if (!_.isNil(seatId)) {
        this.selectedSeat = _.cloneDeep(_.find(this.seats, s => s.id == seatId))
      }
    }

    @action.bound
    upsertSeatData(seat) {
      if (!seat.id) {
        this.addEmptySeat(seat.x, seat.y)
      } else {
        this.updateSelectedSeat(seat)
      }
    }

    @action.bound
    updateSelectedSeat(seat) {
      const updatedSeat = _.find(this.seats, s => s.id == seat.id)
      _.extend(updatedSeat, seat);
      this.seats = this.seats.slice()
    }

    @action.bound
    deleteSeat(seatId) {
      _.remove(this.seats, s => s.id === seatId)
    }

    @action.bound
    constructSeatObj(parentContainer, draggableEl) {
      const seat = {};
      const seatId = _.get(draggableEl, 'helper.context.id')
      seat.id = seatId

      const off = $(parentContainer).position()
      const offsetFix = 11
      const left = draggableEl.position.left - off.left - offsetFix
      const top = draggableEl.position.top - off.top - offsetFix

      seat.x = left;
      seat.y = top;

      return seat;
    }
}

export default SeatsStore