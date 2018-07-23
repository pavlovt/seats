<template>
  <div>
    <div id="element">
        <seat-svg v-bind:clone="clone"></seat-svg>
    </div>
    <div id="dropzone" class="ui-widget-header floor-map">
      <floor-2-map
        v-bind:seats="seats"
        :setSelectedSeat="onSelectSeat"
        :selectedSeatId="selectedSeat.id"
        :updateSeatPosition="updateSeatPosition"
        :constructSeatObj="constructSeatObj"
        ></floor-2-map>
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
    upsertSeatData: Function,
    updateSeatPosition: Function,
    constructSeatObj: Function
  },

  data: () => ({
    clone: true
  }),

  methods: {},

  mounted() {
    const self = this;

    $("#dropzone").droppable({
      drop: function(event, ui) {
        self.upsertSeatData(self.constructSeatObj(this, ui))
      }
    });
  }
};
</script>
<style>
#dropzone {
  margin: 10px;
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
