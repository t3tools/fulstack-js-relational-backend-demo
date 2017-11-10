const express = require('express')
const ejs = require('ejs')

const indexRouter = require('./src/routes/indexRouter.js')
const jobsRouter = require('./src/routes/jobsRouter.js')

const connectToDb = require('./src/database/dbConnect.js')
const dbConfigObj = require('./knexfile')

const app = express()
app.getVar = app.get

// DB Connection
const appDb = connectToDb(dbConfigObj.development)
app.set('db', appDb)


// Configure Views
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Configure Static directory of static files (.js, .css)
app.use( express.static(`${__dirname}/dist`))


// Configure Router
app.use('/', indexRouter)
app.use('/jobs', jobsRouter)



app.use((req, res)=>{
  console.log( req.app.getVar('views') )
  res.render('404')
})

//Configure port
const PORT = 3000
app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
