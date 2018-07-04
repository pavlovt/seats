import {observable, action, computed} from 'mobx'

const workPlaceElementClasses = 'object activeElement ui-draggable ui-draggable-handle editable-seat'
const rotateHandleClasses = 'ui-rotatable-handle ui-draggable'
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
      return this.seats.map(seatStyles => {
        const image = domUtils.createElement('img', { src: seatImageUrl, width: seatImageWidth })
        const seatContainer = domUtils.createElement('div', { classList: workPlaceElementClasses, style: seatStyles })
        const rotateHandle = domUtils.createElement('div', { classList: rotateHandleClasses })

        seatContainer.appendChild(image)
        seatContainer.appendChild(rotateHandle)

        return seatContainer
      });
    }
}

export default SeatsStore