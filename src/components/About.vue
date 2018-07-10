<template>
  <div class="about">

    <h1>{{ title }}</h1>
    
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
                <h2>{{ data.headline }}<br>{{data.sub}}</h2>
                <p>{{ data.blurb }}</p>
                <h3>{{data.tech_blurb}}</h3>
                <div v-for="i in data.techs" class="tech-list">
                    <ul>
                        <li>{{i}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>

    
    


  </div>
</template>

<script>
// import the fetchData mixin here
import {fetchDataMixin} from '../../src/fetchData.js'


export default {
  name: 'About',

  mixins: [fetchDataMixin],

  data () {
    return {
      title: 'About',
      loading: true,
      show: false,
      data: '',
      error: ''
    }
  },

  created() {
    //   pulling in mixin; call fetchData method from mixin here
        this.fetchData('about'); 
  },

  methods: {
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
