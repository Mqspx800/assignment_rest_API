const express = require('express')
const movieRouter = require('./movies/router')
const bodyParser = require('body-parser')
const app = express()
port = 4000

const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(movieRouter)

app.listen(port,()=>console.log(`Movie REST_Api is listening on port ${port}`))