const Router = require('express').Router;
const { showHome, showAbout} = require('../controller/indexController.js')

const indexRouter = Router()

indexRouter
  .get('/', showHome)

indexRouter
  .get('/about', showAbout)


module.exports = indexRouter
