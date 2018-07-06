<template>
  <div id="content">
    <drag-drop-floor-map v-bind:seats="state.seats" :onSelectSeat="onSelectSeat" :selectedSeat="state.selectedSeat" :onSeatSave="saveSeatData"></drag-drop-floor-map>
    <div class="container-seat-form">
      {{state.selectedSeat}}
      <seat-form :seat="state.selectedSeat" :saveSeatData="saveSeatData"></seat-form>
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
  }
});
</script>
<style scoped>
.container-seat-form {
  width: 20%;
  float: left;
}
</style>
