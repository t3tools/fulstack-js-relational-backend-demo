const User = require('../models/User.js')
const handleDbError = require('../helpers/handleDbError.js')

module.exports = async function verifyPassword(req, res, next){
  try{
    const user = res.locals.user
    const reqBody = req.body

    console.log(user)
    if(!user) return next()

    res.locals.validPassword = await user.verifyPassword(reqBody.password)
    next()
  } catch (err){

    handleDbError(res, err)

  }
}
