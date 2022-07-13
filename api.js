/*const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const connection = require('./db/db')

dotenv.config({path:'./env/.env'})
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT,() => {
    console.log(`Api iniciada en el puerto: ${PORT}`)})*/
console.log('conectado')

    function traer() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=> {
            console.log(data)
        })
    }

    traer();