module.exports = {
    isLoggedIn
}

function isLoggedIn(req, res, next){
    console.log('is logged in')
    if (req.isAuthenticated()) return next()
    console.log('got past authentication')
    res.redirect('/auth/google')
  }