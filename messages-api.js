const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
app.use(jsonParser)



let msgCount = 0
const requestLimitMiddleWare=(req,res,next)=>{
  console.log('middleware',msgCount)
  if (msgCount >= 5) {
    res.status(429).json('too many request')
    return
  }
  msgCount++
  next()
}


app.post('/messages', requestLimitMiddleWare,(req, res, next) => {
  console.log(req.body)
  if (req.body.text && req.body.text !== '') {
    res.json({ "message": "Message received loud and clear" })
  }
  else {
    res.status(400).json("bad request")
  }
})

app.listen(port, () => { console.log(`server listening on port ${port}`) })
