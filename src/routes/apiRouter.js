const Router = require('express').Router;
const Job = require('../models/Job.js')
const Company = require('../models/Company.js')

const apiRouter = Router()

function jobsIndex (req, res){
    Job.query()
      .then((data)=>{
        return res.json(data).status(200)
      })
      .catch(e => {
      res.send('Error: ', e).status(500)
     })

}

function jobsCreate (req, res){
  Job.query()
    .insert(req.body)
    .then( data => {
      return res.json(data).status(200)
    })
    .catch( err => res.send(err).status(500))
}

function jobsDelete (req, res){

  Job.query()
    .deleteById(req.params.id)
    .then( data => {
      return res.json({ rowsDeleted: data}).status(200)
    })
    .catch( err => res.send(err).status(500))
}



function companiesIndex (req, res){
  Company.query()
    .eager('jobs')
    .then((data)=>{
      console.log(data)
      return res.json(data)
    })
}

function companiesDelete (req, res){
  Company.query()
    .where('id', req.params.id)
    .first()
    .returning('*')
    .then((recordToDelete)=>{
      return recordToDelete
        .$relatedQuery('jobs')
        .delete()
        .where('companyId', recordToDelete.id )
        .returning('*')
        .then((data)=>{
          console.log('deleting records:', data)
          return recordToDelete
        })
        .catch((err)=>{
          console.log(err)
          return res.send(err).status(500)
        })
    })
    .then((d)=>{
      return Company
        .query()
        .deleteById(d.id)
        .then(()=>{
          return d
        })
    })
    .then( d => res.json(d).status(200) )
    .catch((err)=>{
      console.log('errr', err)
      return res.send(err).status(500)
    })


}





apiRouter
  .get('/jobs', jobsIndex )
  .post('/jobs', jobsCreate)
  .delete('/jobs/:id', jobsDelete)

apiRouter
  .get('/companies', companiesIndex)
  .delete('/companies/:id', companiesDelete)

module.exports = apiRouter
