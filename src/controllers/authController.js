const User = require('../models/User.js')

exports.handleLoginRes = function(req, res){
  const user = res.locals.user

  if (!res.locals.userAlreadyExists) {
    return res.status(403).json('403: user email does not exists')
  }

  if (!res.locals.validPassword) {
    return res.status(403).send('403: invalid user password')
  }

  delete user.password
  return res.status(200).json(user)
}

exports.handleRegisterRes = function(req, res){
  const newUser = res.locals.newUser
  const previousUser = res.locals.user
  if(previousUser) {
    return res.status(403).json('User email alteady exists')
  }

  if(!newUser){
    return res.status(403).json(res.locals.newUser)
  }

  delete newUser.password
  return res.status(200).json(newUser)
}
