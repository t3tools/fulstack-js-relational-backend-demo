const Router = require('express').Router;
const { renderHome, renderAbout } = require('../controller/indexController.js')

const indexRouter = Router()

indexRouter
  .get('/', renderHome)

indexRouter
  .get('/about', renderAbout)

module.exports = indexRouter
