<template>
  <div
    v-bind:class="['object activeElement ui-draggable editable-seat selectable-seat', {'ui-selected': seatId == selectedSeat.id}, seatId]"
    :style="position"
    v-on:click="onSelectSeat(seatId)"
    >
    <img src="https://svgshare.com/i/7BU.svg" width="50">
    <div class="ui-rotatable-handle ui-draggable"></div>
  </div>
</template>
<script>
export default {
  name: 'seat',
  props: {
    position: String,
    seatId: Number | String,
    onSelectSeat: Function,
    selectedSeat: Object
  },
  mounted() {
    $(`.object.ui-draggable.${this.seatId}`)
      .draggable(this.draggableConfig)
      .rotatable({
        snap: 2,
        stop: this.handleRotateStop
      });
  }
}
</script>
<style scoped>
.selectable-seat.ui-selected {
  background: #f39814;
  color: white;
}
</style>
