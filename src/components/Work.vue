<template>
  <div class="work">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      msg: 'WORK'
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
