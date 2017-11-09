//(II) Import Express
const express = require('express')

//(III) Initialize express app
const app = express()

//(IV) Create Basic Route
app.use('/', (req, res)=>{
  //(IV-1)  req/res is how we handle requests and responses
  res.send('<h1>DEV JOBS - Home Page</h1>')
})

//(V) Create 404 Route
app.use((req, res)=>{
  res.send('<h1>DEV JOBS - 404 Route</h1>')
})

//(VI) Set Port, Run Server
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
