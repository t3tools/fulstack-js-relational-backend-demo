const User = require('../models/User.js')

module.exports = async function verifyPassword(req, res, next){
  try{
    const user = res.locals.user
    const reqBody = req.body

    if(!user) throw new Error('cannot verify password of nonexistent user')
    const validPass = await user.verifyPassword(reqBody.password)
    if(!validPass) return res.status(403).send('User password invalid')
    next()
  } catch (err){
    console.log(err)
    return res.status(500).send(err.toString())
  }
}
