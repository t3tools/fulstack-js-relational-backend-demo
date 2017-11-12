const Router = require('express').Router;
const Job = require('../models/Job.js')
const Company = require('../models/Company.js')


const apiRouter = Router()

function jobsIndex (req, res){
  Job.query()
    .then((data)=>{
      console.log(data)
      return res.json(data)
    })
}

function companiesIndex (req, res){
  Company.query()
    .eager('jobs')
    .then((data)=>{
      console.log(data)
      return res.json(data)
    })
}



apiRouter
  .get('/jobs', jobsIndex )
  .get('/companies', companiesIndex)

module.exports = apiRouter
