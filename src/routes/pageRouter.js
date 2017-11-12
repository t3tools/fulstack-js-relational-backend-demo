const Router = require('express').Router;
const fs = require('fs-extra')

const pageRouter = Router()

pageRouter
  .get('/', (req, res)=>{
    fs.readFile(`${__dirname}/../views/index.html`, 'utf-8')
      .then((htmlData)=>{
        res.send(htmlData)
      })
  })

pageRouter
  .get('/about', (req, res)=>{
    fs.readFile(`${__dirname}/../views/about.html`, 'utf-8')
      .then((htmlData)=>{
        res.send(htmlData)
      })
  })

module.exports = pageRouter
