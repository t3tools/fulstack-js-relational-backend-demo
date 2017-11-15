exports.sendAuthenticatedUser = function(req, res){
  const user = res.locals.user
  console.log(user)
  delete user.password
  res.status(200).json(user)
}
