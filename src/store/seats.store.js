import {observable, action, computed, autorun} from 'mobx'

const workPlaceElementClasses = 'object activeElement ui-draggable ui-draggable-handle'
const seatImageUrl = 'https://svgshare.com/i/7BU.svg'
const seatImageWidth = 50

class SeatsStore {
    @observable
    seats = [
      'position: absolute; left: 270px; top: 280px; z-index: 10; transform: rotate(-5.4367rad);',
      'position: absolute; left: 350px; top: 140px; z-index: 10;',
      'position: absolute; left: 250px; top: 140px; z-index: 10;'
    ]

    @computed
    get workPlaces() {
      const seats = this.seats.map(seat => {
        const image = document.createElement('img')
        image.src = seatImageUrl
        image.width = seatImageWidth
        
        const seatContainer = document.createElement('div')
        seatContainer.classList = workPlaceElementClasses
        seatContainer.style = seat

        seatContainer.appendChild(image)

        return seatContainer
      });

      return seats
    }
}

export default SeatsStore