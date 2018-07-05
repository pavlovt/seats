<template>
  <div class="form-group">
    <label :for="id">{{label}}</label>
    <input :type="type" class="form-control" :id="id" placeholder="" :value="value" @input="update($event.target.value)" v-bind="$attrs">
    <!-- <small :id="id+Help" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
  </div>
</template>

<script>
  export default {
    name: 'xinput',
    // ['label', 'name', 'placeholder', 'id', 'type'],
    props: {
      value: String | Number,
      label: String,
      name: String,
      placeholder: String,
      id: {type: String, default: function (val) {
        return val || `form-${this.name}`;
      }},
      type: {type: String, default: 'text'}
    },
    data() {
      return {
        
      }
    },
    methods: {
      update(val) {
        this.$emit('input', val)
      }
    },
    mounted() {

    },
  };
</script>