<template>
  <div class="contact">

    <h1>{{title}}</h1>
    
    <div v-if="loading" class="loading">
        <img src="../assets/loading.gif" alt="loading...">
    </div>

    <br />

    <div v-if="error" class="error">
      {{error}}
    </div>

    <transition name="fade">
        <div v-if="show">
            <div v-if="data">
                <p>{{data.headline}}, {{data.sub}}</p>
                <strong><p>{{data.email}}</p></strong>
                <a :href="data.linkedin" target="_blank">LinkedIn </a>
            </div>
        </div>
    </transition>


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
      loading: true,
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
