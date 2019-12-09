var express = require('express');
var router = express.Router();
var methodsCtrl = require('../controllers/methods')
var auth = require('../util/authentication')

router.get('/', auth.isLoggedIn, methodsCtrl.index)
router.get('/edit/:id', auth.isLoggedIn, methodsCtrl.edit)
router.put('/:id', auth.isLoggedIn, methodsCtrl.update)
router.get('/new', auth.isLoggedIn, methodsCtrl.new)
router.post('/', auth.isLoggedIn, methodsCtrl.create)
router.delete('/:id', auth.isLoggedIn, methodsCtrl.delete)
router.get('/:id', auth.isLoggedIn, methodsCtrl.show)


module.exports = router