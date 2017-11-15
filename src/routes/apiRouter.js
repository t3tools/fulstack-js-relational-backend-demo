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

function usersIndex (req, res){
  const db = req.app.locals.db
  db.select()
    .table('user')
    .then((data)=>{
        const dataNoPass = data.map((u)=>{
          delete u.password
        })
        return dataNoPass
    })
    .then((dNoPass)=>{
      res.json(dNoPass)
    })
}



apiRouter
  .get('/jobs', jobsIndex )
  .get('/companies', companiesIndex)
  .get('/users', usersIndex)

module.exports = apiRouter
