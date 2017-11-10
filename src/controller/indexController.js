

function renderHome (req, res){
  //(V)
  res.render('home.ejs')
}

function renderAbout (req, res){
  //(V)
  res.render('about.ejs', {info: 'We like to code here'})
}


module.exports = {
  renderHome,
  renderAbout
}
