const express = require('express')

const apiRouter = require('./src/routes/apiRouter.js')
const pageRouter = require('./src/routes/pageRouter.js')

const connectToDb = require('./src/database/dbConnect.js')
const dbConfigObj = require('./knexfile')

const app = express()

// DB Connection
const appDb = connectToDb(dbConfigObj.development)

app.locals.db = appDb
// Configure Router
app.use('/api', apiRouter)
app.use('/', pageRouter)


app.use((req, res)=>{
  res.send('<h1>Okay nothing here</h1>')
})

//Configure port const PORT = 3000
app.listen(3000, ()=>{
  console.log(`APP LISTENING ON ${3000}`)
})
