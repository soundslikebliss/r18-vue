<template>
  <div class="work">

    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" alt="loading...">
    </div>

    <div v-if="error" class="error">
      {{error}}
    </div>

    <div v-if="work" v-for="i in work" class="content">
      <h2>{{i.name}}</h2>
      <p>{{i.desc}}</p>
    </div>

  </div>
</template>




<script>
import axios from 'axios'

export default {
  name: 'Work',

  data() {
    return {
      loading: false,
      work: null,
      error: null,
    }
  },

  created() {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      this.loading = true;

      axios.get('https://david-adams-resume.firebaseio.com/work.json')
      .then((resp) => {
        this.work = resp.data
        this.loading = false;
      })
      .catch(function (error) {
        console.log(error);
      });
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
