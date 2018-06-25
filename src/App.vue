<template lang="ehtml">
  div.container id=app {
    div id=nav {
      router-link  to=/login { 'Login' } ' | ' 
      router-link  to=/ { 'Home' } ' | ' 
      router-link  to=/about { 'About' } ' | '
      router-link  to=/drag { 'Drag' }  ' | '
      router-link  to=/contact { 'Contact' }
    }
    router-view  {}
  }
</template>

<script>
  /*import * as jq from 'jquery';
  window.$ = jq

  import 'webpack-jquery-ui';
  import 'webpack-jquery-ui/css';*/

  import * as _ from 'lodash';
  window._ = _
  import conf from './core/conf'
  window.conf = conf
  import msg from './core/msg'
  window.msg = msg
  import api from './core/api'
  window.api = api

  // init html head
  import head from './core/head'
  head.init(conf.head)

  import { sync } from 'vuex-pathify'

  export default {
    name: 'app',
  /*  components: {
      ...form
    }*/
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
