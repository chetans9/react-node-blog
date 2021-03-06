var express = require('express');
var router = express.Router();
const authUtil = require('../util/auth');
const jwt = require('jsonwebtoken');
const moment = require('moment');

let { UsersModel } = require('../models');


router.post('/login', async function(req, res, next) {


  let response = {};
  let err_response = {
    error : {
      code : 0,
      message : ""

    }
  };


  response.token = null;
  let user = await UsersModel.findOne({
    where : {
      user_name : req.body.user_name
    }

  });

  if(!user){
    err_response.error.message = "Invalid Username or Password";
    return res.json(err_response);
  }

  let hash = user.password;

  let authUser = {

    name : user.user_name,
    first_name : user.first_name,
    roles : []
  };

  authUtil.comparePassword(req.body.password, hash, function(err, isPasswordMatch){

   if(!isPasswordMatch){
    err_response.error.message = "Invalid Username or Password";
    return res.json(err_response);
   }

    if(isPasswordMatch && !err){

      let payload = {
        sub : user.id,
        iat : moment().unix(),
        name : user.user_name,
        exp :  moment().add(30,'days').unix()

      }


      let token = jwt.sign(payload, process.env.JWT_SECRET);
      response.token = token;
      response.user = authUser;

      res.cookie('jwt',token, { httpOnly: false, maxAge: 24 * 60 * 60 * 1000 })

      return res.json(response);

    }

    return res.json(response);
    

    //Issue a JWT token 

    


  });




  




  
  
});

module.exports = router;
