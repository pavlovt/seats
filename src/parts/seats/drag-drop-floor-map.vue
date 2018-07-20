<template>
  <div>
    <div id="element">
        <seat-svg></seat-svg>
    </div>
    <div id="dropzone" class="ui-widget-header floor-map">
      <floor-2-map v-bind:seats="seats"></floor-2-map>
    </div>
  </div>
</template>
<script>
export default {
  name: "drag-drop-floor-map",
  props: {
    seats: Array,
    onSelectSeat: Function,
    selectedSeat: Object,
    onSeatSave: Function,
    addEmptySeat: Function
  },

  methods: {},

  mounted() {
    const self = this;

    $("#dropzone").droppable({
      drop: function(event, ui) {
        const off = $(this).position()
        const offsetFix = 11;
        const left = ui.position.left - off.left - offsetFix
        const top = ui.position.top - off.top - offsetFix
        // Add the svg to the store
        self.addEmptySeat(left, top)
      }
    });
  }
};
</script>
<style>
#dropzone {
  margin: 10px;
  position: relative;
}

.floor-map {
  width: 1206px;
  height: 831px;
  float: left;
}

.ui-rotatable-handle {
  background: url("https://cdn.jsdelivr.net/jquery.ui.rotatable/1.0.1/rotate.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 15px;
  width: 15px;
  position: absolute;
  top: -15px;
  right: -13px;
}
</style>
