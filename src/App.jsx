const axios = require('axios')
//require('dotenv/config')



const url2 = `https://www.themoviedb.org/authenticate/2c579d5b9dbab1eef750ed207ff9a8baaa24146b`

axios.post(url2)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
