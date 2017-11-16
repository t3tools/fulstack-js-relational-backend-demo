const User = require('../models/User.js')


exports.serializeUser = function(user, done){
  done(null, user.id)
})

exports.deserializeUser = async function(userId, done){
    const u = await User
      .query()
      .findById(userId)
      .returning('*')

    done(null, u)
})
