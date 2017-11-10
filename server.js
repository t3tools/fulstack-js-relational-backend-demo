const express = require('express')

// (IV-1) - Import pageRouter.js
const pageRouter = require('./src/routes/pageRouter.js')
const jobsRouter = require('./src/routes/jobsRouter.js')

const app = express()

// (IV-2) - Import pageRouter.js
app.use('/', pageRouter)
app.use('/jobs', jobsRouter)


app.use((req, res)=>{
  res.send('<h1>Page Not Found Route</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
