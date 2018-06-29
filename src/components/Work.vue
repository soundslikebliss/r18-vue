<template>
  <div class="work">
    <h1>{{title}}</h1>

    <br />

    <div v-if="error" class="error">
      {{error}}
    </div>

    <div v-if="data" v-for="places in data" class="content">
        <div v-for="i in places">
          <h2>{{i.name}}:</h2> 
          <p>{{i.desc}}</p>
        </div>
    </div>

  </div>
</template>




<script>
// import the fetchData mixin here
import {fetchDataMixin} from '../../src/fetchData.js'


export default {
  name: 'Work',

  mixins: [fetchDataMixin],

  data() {
    return {
      title: 'Work',
      data: null,
      error: null
    }
  },

  created() {
    //   pulling in mixin; call fetchData method from mixin here
    this.fetchData('work');
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
