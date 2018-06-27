<template>
  <div>
    <h1>Hello World {{ name }}</h1>
    <img src="/img/logo.png" alt="">
  </div>
</template>
<script>
  export default {
    name: 'contact',
    data: () => ({
      name: 'Vue JS'
    })
  }
</script>
