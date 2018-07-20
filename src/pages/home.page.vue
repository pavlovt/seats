<template lang="ehtml">
  .row {
      .col {
          img src=/img/logo.png {}
          form @submit.prevent=submit {
              xauto name=username label=Username v-model=frm.username :data="data" text="qqq" {}
              br {}
              button.btn.btn-primary { 'Submit' }
          }
      }
  }
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/parts/HelloWorld.vue'
// const t = require('./t.ehtml')
// console.log('ttt', t)
export default {
  name: 'home',
  title: 'Home',
  path: '/',
  components: {
    // HelloWorld
  },
  data() {
    return {
      frm: {},
      data: [{id: 'au', text: 'Australia'}, {id: 'at', text: 'Austria'}, {id: 'br', text: 'Brasil'}]
    }
  },
  methods: {
    submit() {
      console.log(this.frm)
    }
  }
}
</script>
