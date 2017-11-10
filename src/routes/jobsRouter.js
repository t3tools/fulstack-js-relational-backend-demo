const Router = require('express').Router;
const { jobsIndex } = require('../controller/jobsController.js')

const jobsRouter = Router()

jobsRouter
  .get('/', jobsIndex )

module.exports = jobsRouter
