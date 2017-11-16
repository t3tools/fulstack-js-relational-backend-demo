const User = require('../models/User.js')

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

exports.handleLoginRes = (req, res)=>{
  console.log(req.user)
  res.json(req.user)
}

exports.handleCurrentAuthRes = (req, res)=>{
    const user = req.user
    req.logout()
    res.status(200).json({loggedOut: true, user})
}

exports.handleLogoutRes = (req, res)=>{
    const user = req.user
    req.logout()
    res.status(200).json({loggedOut: true, user})
}
