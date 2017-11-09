/*
Part-2 Changelog
  I - Add routes directory in src/
  II - Add indexRouter.js file
  III - Configure router + export
  IV - Import indexRouter + add to express app
*/

const express = require('express')

// IV-1 - Import indexRouter.js
const indexRouter = require('./src/routes/indexRouter.js')

const app = express()

// IV-2 - Import indexRouter.js
app.use('/', indexRouter)

app.use((req, res)=>{
  res.send('<h1>DevJobs - No Match Route</h1>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
