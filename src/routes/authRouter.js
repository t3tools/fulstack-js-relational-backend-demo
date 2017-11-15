let Router = require('express').Router;
let User = require('../models/User.js')
let getUserByEmail = require('../middleware/auth-getUserByEmail.js')
let verifyPassword = require('../middleware/auth-verifyPassword.js')
let {sendAuthenticatedUser} = require('../controllers/authController.js')

// let {registerUser, getCurrentUser, logoutUser, authenticateUser } = require('../controllers/authController.js')(User)
const authRouter = Router()

authRouter
  .post('/login',
    getUserByEmail,
    verifyPassword,
    sendAuthenticatedUser
  )
  // .post('/register', registerUser)
  // .get('/current', getCurrentUser)
  // .get('/logout', logoutUser)


module.exports = authRouter
