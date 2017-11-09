//(1) Import Express
const express = require('express')

//(2) Initialize express app
const app = express()

//(3) Create Basic Route
app.use('/', (req, res)=>{
  res.send('<h1>DEV JOBS</h1>')
})

//(4) Set Port
const PORT = process.env.PORT || 3000

//(5) Run server
app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
