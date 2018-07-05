<template>
  <div class="contact">

    <h1>{{title}}</h1>
    <br>

    <p>{{data.headline}}, {{data.sub}}</p>
    <strong><p>{{data.email}}</p></strong>
    <a :href="data.linkedin" target="_blank">LinkedIn </a>

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
      title: 'Contact',
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
