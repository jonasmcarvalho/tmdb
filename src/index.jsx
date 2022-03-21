const axios = require('axios')
//require('dotenv/config')

const token = process.env.TOKEN
let requestToken = ''

const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${token}`

axios.get(url)
    .then(response => {
        requestToken = response.data.request_token
        console.log(requestToken)
        console.log('teste')

    })
    .catch(error => {
        //console.log(error)
    })

