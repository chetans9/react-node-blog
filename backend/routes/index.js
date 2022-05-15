var express = require('express');
var router = express.Router();
var contactUsController = require('../controllers/contactUsController');

let passport = require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.protocol + '://' +  req.get('host'));

  return res.send(req.baseUrl);

  console.log(req.cookie['jwt']);
  //return req.cookies['jwt'];
  res.render('index', { title: 'Express' });
});


router.post('/contact-us',passport.authenticate('jwt', { session: false}), contactUsController.save);

module.exports = router;
