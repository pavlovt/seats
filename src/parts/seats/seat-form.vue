<template>
  <form v-on:submit.prevent="saveSeatData(seat)">
    <h3 class="text-center">Seat Info</h3>
    <xinput name="assignee" type="text" v-model="seat.assignee" label="Assignee"></xinput>
    <xinput name="workPlaceNumber" type="number" v-model="seat.workPlaceNumber" label="Place Number"></xinput>
    <xaction>Save</xaction>
  </form>
</template>
<script>
export default {
  props: {
    seat: Object,
    saveSeatData: Function
  }
}
</script>
