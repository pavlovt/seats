<template>
  <div id="content">
    <drag-drop-floor-map v-bind:seats="state.seats"></drag-drop-floor-map>
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

  mounted() {
    $(".selectable-seat")
      .bind("mousedown", function(e) {
        e.metaKey = true;
      })
      .selectable({ autoRefresh: true });
  }
});
</script>
<style>
#dropzone .ui-selected {
  background: #f39814;
  color: white;
}
</style>
