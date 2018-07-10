import axios from 'axios'


export const fetchDataMixin = {

    methods: {
        fetchData: function(arg) {

            setTimeout(() => {
                axios.get('https://david-adams-resume.firebaseio.com/' +arg+ '.json')
                .then((resp) => {
                    this.data = resp.data;
                    this.loading = false;
                    this.show = true;
                    console.log(this.data, 'response data');
                })
                .catch(function (error) {
                    console.log(error);
                });
            }, 300);  
        }
    }
}
