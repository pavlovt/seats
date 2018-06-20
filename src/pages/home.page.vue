<template lang="ehtml">
  .row {
      .col {
          form @submit.prevent=submit {
              input v-model="frm.z" {}

              button.btn.btn-primary { 'Submit' }
          }
      }
  }
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/el/HelloWorld.vue'
// const t = require('./t.ehtml')
// console.log('ttt', t)
export default {
  name: 'home',
  title: 'Home',
  path: '/',
  components: {
    HelloWorld
  },
  data() {
    return {
      frm: {}
    }
  },
  methods: {
    submit() {
      console.log(this.frm)
    }
  }
}
</script>
