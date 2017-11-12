const Router = require('express').Router;

const apiRouter = Router()

function jobsIndex (req, res){
  const db = req.app.locals.db
  db.select()
    .table('job')
    .then((data)=>{
      console.log('hi')
      res.json(data)
    })
}

apiRouter
  .get('/jobs', jobsIndex )


module.exports = apiRouter
