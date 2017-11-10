function jobsIndex (req, res){
  const db = req.app.getVar('db')
  db.select()
    .table('job')
    .then((data)=>{
      res.render('jobs-index.ejs',{
        jobsList: data
      })
    })
}

function createJob (req, res){
  const db = req.app.getVar('db')
}

function deleteJob (req, res){
  const db = req.app.getVar('db')

}


module.exports = {
  jobsIndex
}
