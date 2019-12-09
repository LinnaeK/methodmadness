var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index')
var auth = require('../util/authentication')

/* GET home page. */
router.get('/', indexCtrl.index)
router.post('/todos', auth.isLoggedIn, indexCtrl.new)
router.delete('/todos/:id', auth.isLoggedIn, indexCtrl.delete)
router.get('/todos/done/:id', auth.isLoggedIn, indexCtrl.updateDone)
router.get('/todos/:id', auth.isLoggedIn, indexCtrl.show)



router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
