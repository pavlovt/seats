<template>
  <button :type="type" class="btn btn-primary">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'xaction',
    // ['label', 'name', 'placeholder', 'id', 'type'],
    props: {
      type: {type: String, default: 'submit'}
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    },
    mounted() {

    },
  };
</script>