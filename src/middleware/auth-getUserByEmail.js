const User = require('../models/User.js')

module.exports = async function getUserByEmail(req, res, next){
  const reqBody = req.body

  try {
    const user = await User
      .query()
      .first()
      .where({ email: reqBody.email })
      .returning('*')

    console.log(user)
    if (!user) {
      console.log('no user???')
      return res.send(`User ${reqBody.email} doesn't exist`).status(400)
    }
    res.locals.user = user
    next()
  } catch (err){
    console.error('error ---', err)
    return res.status(500).send(err.toString())
  }

}
