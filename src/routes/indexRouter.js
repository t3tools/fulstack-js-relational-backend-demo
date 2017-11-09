//(III-1) import router
const Router = require('express').Router;

//(III-2) initialize router
const indexRouter = Router()


//(III-3) create home routes
indexRouter
  .get('/',(req, res)=>{

    //(III-3a) In an express app we interact w/ req, res
    res.send('<h1>Dev Jobs - Home Page</h1>')
  })

//(III-4) create home routes
indexRouter.get('/about',(req, res)=>{
  res.send('<h1>About Page</h1>')
})

//(III-5) export router
module.exports = indexRouter
