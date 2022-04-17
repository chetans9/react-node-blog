var express = require('express');
var router = express.Router();

let categoriesController = require('../controllers/categories/categoriesController');


router.get('/',categoriesController.index);

router.get('/select-data', categoriesController.categoriesSelectData );

module.exports = router;
