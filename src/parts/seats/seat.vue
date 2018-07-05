<template>
  <div class="object activeElement ui-draggable editable-seat selectable-seat" :style="position">
    <img src="https://svgshare.com/i/7BU.svg" width="50">
    <div class="ui-rotatable-handle ui-draggable"></div>
  </div>
</template>
<script>
export default {
  name: 'seat',
  props: {
    position: String
  }
}
</script>
<style>
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
