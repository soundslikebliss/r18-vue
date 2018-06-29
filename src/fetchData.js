import axios from 'axios'


export const fetchDataMixin = {
    data() {
        return {
            work: null,
            error: null
        }
    },

    created: function() {
    },

    methods: {
        fetchData: function(arg) {

            axios.get('https://david-adams-resume.firebaseio.com/' +arg+ '.json')
                .then((resp) => {
                    this.work = resp.data
                    console.log(work, 'work');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}
