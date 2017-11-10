//(IV-1) import router
const Router = require('express').Router;

//(IV-2) initialize router
const jobsRouter = Router()


//(IV-3) create home routes
jobsRouter
  .get('/',(req, res)=>{
    //(III-3a) In an express app we interact w/ req, res
    res.send('<h1>Dev Jobs - List</h1>')
  })

jobsRouter
  .get('/new',(req, res)=>{
    //(III-3a) In an express app we interact w/ req, res
    res.send('<h1>Post a job listing!!</h1>')
  })

//(IV-5) export router
module.exports = jobsRouter
