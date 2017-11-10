const express = require('express')
const ejs = require('ejs')

const indexRouter = require('./src/routes/indexRouter.js')

const app = express()

// (IV-1) - configure view engine
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');

// (IV-1) - configure view source files
app.set('views', './src/views');

// (VIII) - Configure express static
app.use( express.static(`${__dirname}/dist`))

app.use('/', indexRouter)

app.use((req, res)=>{
  res.render('404')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
