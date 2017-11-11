const express = require('express')
const fs = require('fs')

// Import views
const homePageHTML = fs.readFileSync(`${__dirname}/src/views/index.html`, 'utf-8')

// Import pageRouter.js
const pageRouter = require('./src/routes/pageRouter.js')
const apiRouter = require('./src/routes/apiRouter.js')

const app = express()

app.use(express.static(`${__dirname}/public`))
// (IV-2) - Import pageRouter.js
app.use('/', pageRouter)
app.use('/api', apiRouter)

// (VII) Create 404-route (if the other routes don't match)
app.use((req, res)=>{
  res.send('<h1>Page Not Found Route</h1>')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
  console.log(`APP LISTENING ON ${PORT}`)
})
