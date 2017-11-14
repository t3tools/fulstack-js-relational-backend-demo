const passport = require('passport')
const User = require('../models/User.js')

function return401IfUserExists(userRecord){
	if (userRecord) return res.status(401).send(`record for <${req.body.email}> already exists`)
		else return this
}

function registerUser(req, res, next){
   const requestBody = req.body

   User
    .query()
    .where('email', req.body.email)
    .then(return401IfUserExists)
		.insert(requestBody)
		.then((d)=>{
			console.log(d)
		})
    .catch((err)=>{
			return res.status(401).json(err)
    })
 }





function getCurrentUser (req, res) {
	return res.json({
		user: '...'
	})

  //  if (req.user) {
	// 	return res.json({user: req.user}).status(200);
  // } else {
  //      return res.json({user: null}).status(200)
  // }

 }

function authenticateUser(req, res, next){
  // console.log(req.body)
  // passport.authenticate('local', _handleAuth(req,res,next))(req,res,next)
	res.json({
		authenticate: '...'
	})
 }

// function _handleAuth(req,res,next){
// 	console.log('handling auth.....')
// 	return (err, validPw, info)=>{
//       // failure callback triggered in passport-local strategy
// 	  if (err || !validPw) {
// 		 return res.status(403).json(info)
// 	  }
//
// 	  let userRecord = info
// 	  req.login(info, (err)=>{
// 		  if (err) { return res.status(500).send(err) }
// 		  userRecord.password = undefined
// 		  delete userRecord.password
// 		  return res.json(userRecord).status(200)
// 	  })
// 	  next()
// 	}
// }

function logoutUser(req, res) {
	const requestBody = req.body
	res.json{
		msg: `<${requestBody.user}> logged out...`
	}
  //  if (!req.user) { return res.json({msg: 'error: no current user'}).status(200) }
  //
  // let email = req.user.email
  //  req.logout()
  //  return res.json({msg: `user <${email}> logged out`}).status(200)
 }

module.exports = {
	registerUser,
	getCurrentUser,
	authenticateUser,
	logoutUser
}
