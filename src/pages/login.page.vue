<template lang="ehtml">
  .login {
    h1.text-center { 'Login page' }
    // login form
    form.col-4.offset-4 @submit.prevent=submit {
      xinput  name=username label=Username v-model=frm.username v-validate='required' {}
      span.help.is-danger v-show=errors.has('username') { '{{ errors.first(\'username\') }}' }

      xinput name=password label=Password type=password v-model=frm.password v-validate='required' {}

      xaction  { 'Submit' }
    }
  }
</template>

<script>
  import { sync } from 'vuex-pathify'

  const data = () => ({
    frm: { username: '', password: ''},
  })

  const methods = {
    submit() {
      console.log('frm', this.frm)
      // api.get('/posts')
    }
  }

  const events = {
    beforeCreate() {
      _.assign(this.computed, sync('posts/*'))

    },
    mounted() {
      console.log(this.posts)
      this.act('posts/get')
      .then(r => console.log(r))
    },
  }

  const computed = {
    // ...sync('posts/*')
  }
  
  const main = {
    name: 'login',
    title: 'Login',
    path: '/login',
    components: {
      // ...form
    },
  };

  export default {...main, data, methods, ...events, computed }
</script>

<style lang="scss">
  .login {
    margin-top: 15%;
    text-align: left;
  }
</style>