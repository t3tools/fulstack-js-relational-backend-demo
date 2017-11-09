const Router = require('express').Router;

const indexRouter = Router()

indexRouter
  .get('/',(req, res)=>{
    res.send('<h1>Dev Jobs - Home Page</h1>')
  })

indexRouter.get('/about',(req, res)=>{
  res.send('<h1>About Page</h1>')
})

module.exports = indexRouter
