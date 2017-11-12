const express = require('express')
const ejs = require('ejs')

// Import view engine


// Import pageRouter.js
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')
const pageRouter = require('./src/routes/pageRouter.js')

const connectToDb = require('./src/database/dbConnect.js')
const dbConfigObj = require('./knexfile')

const app = express()

// DB Connection
const appDb = connectToDb(dbConfigObj.development)
// Make db globlly accessible
app.locals.db = appDb


app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)
app.use('/api', apiRouter)


app.use((req, res)=>{
  res.render('404.ejs')
})

//Configure port const PORT = 3000
app.listen(3000, ()=>{
  console.log(`APP LISTENING ON ${3000}`)
})
