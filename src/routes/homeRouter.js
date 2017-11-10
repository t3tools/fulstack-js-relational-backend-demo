const Router = require('express').Router;
const { renderHome, renderAbout } = require('../controller/homeController.js')

const homeRouter = Router()

homeRouter
  .get('/', renderHome)

homeRouter
  .get('/about', renderAbout)


module.exports = homeRouter
