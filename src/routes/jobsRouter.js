const Router = require('express').Router;
const { showManyJobs } = require('../controller/jobsController.js')

const jobsRouter = Router()

jobsRouter
  .get('/', showManyJobs )

module.exports = jobsRouter
