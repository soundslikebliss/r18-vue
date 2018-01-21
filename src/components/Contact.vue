<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'CONTACT'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
