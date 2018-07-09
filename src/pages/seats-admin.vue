<template>
  <div id="content">
    <drag-drop-floor-map :seats="state.seats" :onSelectSeat="onSelectSeat" :selectedSeat="state.selectedSeat" :onSeatSave="saveSeatData"></drag-drop-floor-map>
    <div class="container-seat-form">
      {{state.selectedSeat}}
      <seat-form :seat="state.selectedSeat" :saveSeatData="saveSeatData"></seat-form>
    </div>
    <div class="clearfix"></div>
    <div>
      <i class="fa fa-trash" id="trash"></i>
      <audio id="trashAudio">
        <source src="sounds/trash.mp3" type="audio/mp3">
      </audio>
    </div>
  </div>
</template>
<script>
import { observer } from "mobx-vue";
import SeatsStore from "../store/seats.store";

export default observer({
  name: "seats",
  title: "seats",
  path: "/seats",

  data: () => ({
    state: new SeatsStore()
  }),

  methods: {
    onSelectSeat(seatId) {
      this.state.setSelectedSeat(seatId)
    },
    saveSeatData(seat, afterSeatSavedHandler) {
      this.state.updateSelectedSeat(seat, afterSeatSavedHandler)
      msg.info('Saved!')
    }
  },

  mounted() {
    const audioEl = document.getElementById('trashAudio');
    const self = this;

    $('#trash').droppable({
        over: function(event, ui) {
          const seatId = ui.helper.attr("data-seatid")
          self.state.deleteSeat(seatId)
          ui.draggable.remove()
          audioEl.play();
        }
    });
  }
});
</script>
<style scoped>
.container-seat-form {
  width: 20%;
  float: left;
}

.fa.fa-trash {
  font-size: 66px;
}

.fa.fa-trash:hover {
  color: red;
}
</style>
