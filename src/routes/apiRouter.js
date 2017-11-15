const Router = require('express').Router;

const apiRouter = Router()

function jobsIndex (req, res){
  const db = req.app.locals.db
  db.select()
    .table('job')
    .then((data)=>{
      res.json(data)
    })
}

function companiesIndex (req, res){
  const db = req.app.locals.db
  db.select()
    .table('company')
    .then((data)=>{
        res.json(data)
    })
}

apiRouter
  .get('/jobs', jobsIndex )
  .get('/companies', companiesIndex)

module.exports = apiRouter
