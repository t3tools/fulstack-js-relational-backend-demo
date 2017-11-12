const express = require('express')
const ejs = require('ejs')

const homeRouter = require('./src/routes/homeRouter.js')
const jobsRouter = require('./src/routes/jobsRouter.js')

const connectToDb = require('./src/database/dbConnect.js')
const dbConfigObj = require('./knexfile')

const app = express()
app.getVar = app.get

// DB Connection
const appDb = connectToDb(dbConfigObj.development)
app.set('db', appDb)

// Configure Router
app.use('/', homeRouter)
app.use('/api', apiRouter)


app.use((req, res)=>{
  console.log( req.app.getVar('views') )
  res.render('404')
})

//Configure port
const PORT = 3000
app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
