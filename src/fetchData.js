import axios from 'axios'


export const fetchDataMixin = {

    methods: {
        fetchData: function(arg) {

            axios.get('https://david-adams-resume.firebaseio.com/' +arg+ '.json')
                .then((resp) => {
                    this.data = resp.data
                    console.log(this.data, 'response data');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
}