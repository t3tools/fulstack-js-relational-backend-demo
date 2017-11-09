const Router = require('express').Router;

const indexRouter = Router()

indexRouter
  .get('/',(req, res)=>{
    //(V)
    res.render('home')
  })

indexRouter
  .get('/about',(req, res)=>{
    //(V)
    res.render('about', {info: 'We like to code here'})
  })

module.exports = indexRouter
