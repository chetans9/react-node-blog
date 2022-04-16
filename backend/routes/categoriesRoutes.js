var express = require('express');
var router = express.Router();

let categoriesController = require('../controllers/categories/categoriesController');


router.get('/',categoriesController.index);

module.exports = router;
