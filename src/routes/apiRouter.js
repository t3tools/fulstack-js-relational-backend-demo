const Router = require('express').Router;

const apiRouter = Router()

function jobsIndex (req, res){
  const db = req.app.getVar('db')
  db.select()
    .table('job')
    .then((data)=>{
      res.render('jobs-index.ejs',{
        jobsList: data
      })
    })
}

apiRouter
  .get('/jobs', jobsIndex )


module.exports = apiRouter
