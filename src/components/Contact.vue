<template>
  <div class="contact">
    <h1></h1>
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
      loading: false,
      data: '',
      error: ''
    }
  },

  created() {
    //   pulling in mixin; call fetchData method from mixin here
    this.fetchData('contact');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
