const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
//Import ORM
const { Model } = require('objection')

const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')


const connectToDb = require('./src/database/dbConnect.js')
const dbConfigObj = require('./knexfile')

const app = express()

const appDb = connectToDb(dbConfigObj.development)
Model.knex(appDb)

app.locals.db = appDb

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/public`))

app.use('/', pageRouter)
app.use('/api', apiRouter)


app.use((req, res)=>{
  res.render('404.ejs')
})

app.listen(3000, ()=>{
  console.log(`APP LISTENING ON ${3000}`)
})
