const passport = require('passport')

let Router = require('express').Router;
let User = require('../models/User.js')
let getUserByEmail = require('../middleware/auth--getUserByEmail.js')
let saveNewUser = require('../middleware/auth--saveNewUser.js')
let {
  handleRegisterRes,
  handleCurrentAuthRes,
  handleLogoutRes
} = require('../controllers/authController.js')

// let {registerUser, getCurrentUser, logoutUser, authenticateUser } = require('../controllers/authController.js')(User)
const authRouter = Router()

authRouter
  .post('/login',
    passport.authenticate('local'),

  )
  .post('/register',
    getUserByEmail,
    saveNewUser,
    handleRegisterRes
  )
  .get('/current', (req, res)=>{
    res.json(req.user || {})
  })
  .get('/logout', )


module.exports = authRouter
