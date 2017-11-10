
function renderHome (req, res){
  res.render('home.ejs')
}

function renderAbout (req, res){
  res.render('about.ejs', {info: 'We like to code here'})
}


module.exports = {
  renderHome,
  renderAbout
}
