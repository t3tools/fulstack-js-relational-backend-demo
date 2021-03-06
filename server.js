const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
//Import ORM
const { Model } = require('objection')

const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')
const authRouter = require('./src/routes/authRouter.js')


const connectToDb = require('./src/database/dbConnect.js')
const dbConfigObj = require('./knexfile')

const passport = require('passport')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')

const registerLocalStrategy = require('./src/middleware/passport-local--registerLocalStrategy.js')
const { configDeserializeUser, configSerializeUser } = require('./src/helpers/passport-local--sessionActions.js')

const app = express()

const appDb = connectToDb(dbConfigObj.development)
Model.knex(appDb)

app.locals.db = appDb

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//configure sessions w/ passport
app.use(cookieParser())
app.use(cookieSession({
  name: 'cookiemonster',
	secret: 'superdupersupersecret',
	httpOnly: true,
	signed: false
}))


app.use(passport.initialize())
app.use(passport.session())
passport.use(registerLocalStrategy())
passport.serializeUser(configSerializeUser())
passport.deserializeUser(configDeserializeUser())

app.use(express.static(`${__dirname}/public`))


app.use('/api', apiRouter)
app.use('/auth', authRouter)
app.use('/', pageRouter)

app.use((req, res)=>{
  res.render('404.ejs')
})

app.listen(3000, ()=>{
  console.log(`APP LISTENING ON ${3000}`)
})
