const Router = require('express').Router;
const apiRouter = Router()

apiRouter
  .get('/',(req, res)=>{
    res.json({
      'GET  - /api/jobs': 'Shows the jobs',
      'POST - /api/jobs': 'Create a new job'
    })
  })


apiRouter
  .get('/jobs',(req, res)=>{
    res.json(['list of jobs'])
  })


module.exports = apiRouter
