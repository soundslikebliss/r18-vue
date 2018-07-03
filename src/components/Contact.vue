<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import the fetchData mixin here
import {fetchDataMixin} from '../../src/fetchData.js'

export default {
  name: 'Contact',

  mixins: [fetchDataMixin],


  data () {
    return {
      data: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
