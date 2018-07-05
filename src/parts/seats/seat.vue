<template>
  <div class="object activeElement ui-draggable ui-draggable-handle editable-seat" :style="position">
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
