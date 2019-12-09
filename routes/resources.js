var express = require('express');
var router = express.Router();
var resourcesCtrl = require('../controllers/resources')
var auth = require('../util/authentication')

router.get('/:id', auth.isLoggedIn, resourcesCtrl.new)
router.delete('/:id/:i', auth.isLoggedIn, resourcesCtrl.delete)


module.exports = router