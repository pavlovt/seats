<template>
  <div
    v-bind:class="['object activeElement ui-draggable editable-seat selectable-seat', {'ui-selected': seatId === selectedSeat.id}]"
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
    seatId: Number,
    onSelectSeat: Function,
    selectedSeat: Object
  }
}
</script>
<style scoped>
.selectable-seat.ui-selected {
  background: #f39814;
  color: white;
}
</style>
