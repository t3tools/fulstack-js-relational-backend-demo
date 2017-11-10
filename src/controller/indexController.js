
function showHome (req, res){
  res.render('home.ejs')
}

function showAbout (req, res){
  res.render('about.ejs', {info: 'We like to code here'})
}


module.exports = {
  showHome,
  showAbout
}
