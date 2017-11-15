let Router = require('express').Router;
let User = require('../models/User.js')
let getUserByEmail = require('../middleware/auth-getUserByEmail.js')
let verifyPassword = require('../middleware/auth-verifyPassword.js')
let saveNewUser = require('../middleware/auth-saveNewUser.js')

let {handleLoginRes, handleRegisterRes} = require('../controllers/authController.js')

// let {registerUser, getCurrentUser, logoutUser, authenticateUser } = require('../controllers/authController.js')(User)
const authRouter = Router()

authRouter
  .post('/login',
    getUserByEmail,
    verifyPassword, //Terminate Session, Start Sesssion
    handleLoginRes
  )
  .post('/register',
    getUserByEmail,
    saveNewUser,
    handleRegisterRes
  )
  // .post('/register', registerUser)
  // .get('/current', getCurrentUser)
  // .get('/logout', endSession, logoutUser)


module.exports = authRouter
