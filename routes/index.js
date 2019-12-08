var express = require('express');
var router = express.Router();
var passport = require('passport');
var indexCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', indexCtrl.index)
router.post('/todos', indexCtrl.new)
router.delete('/todos/:id', indexCtrl.delete)
router.get('/todos/done/:id', indexCtrl.updateDone)
router.get('/todos/:id', indexCtrl.show)



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
