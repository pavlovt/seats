<template>
  <div id="content">
    <drag-drop-floor-map v-bind:seats="state.seats" :onSelectSeat="onSelectSeat" :selectedSeat="state.selectedSeat"></drag-drop-floor-map>
    {{this.state.selectedSeat}}
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
    }
  }
});
</script>
