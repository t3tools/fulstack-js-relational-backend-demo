const express = require('express')
const ejs = require('ejs')

// Import view engine


// Import pageRouter.js
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

const app = express()

app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/src/views`);

app.use(express.static(`${__dirname}/public`))

// (IV-2) - Import pageRouter.js
app.use('/', pageRouter)
app.use('/api', apiRouter)

// (VII) Create 404-route (if the other routes don't match)
app.use((req, res)=>{
  res.render('404.ejs')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
