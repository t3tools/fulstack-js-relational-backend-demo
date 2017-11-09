const express = require('express')

const indexRouter = require('./src/routes/indexRouter.js')

const app = express()

app.use('/', indexRouter)

app.use((req, res)=>{
  res.send('<h1>DevJobs - No Match Route</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
