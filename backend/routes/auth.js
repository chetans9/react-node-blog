var express = require('express');
var router = express.Router();
const authUtil = require('../util/auth');
const jwt = require('jsonwebtoken');
const moment = require('moment');

let { UsersModel } = require('../models');


router.post('/login', async function(req, res, next) {


  let response = {};

  response.token = null;
  let user = await UsersModel.findOne({
    where : {
      user_name : req.body.user_name
    }

  });

  if(!user){
    return res.json("Invalid user");
  }

  let hash = user.password;

  authUtil.comparePassword(req.body.password, hash, function(err, isPasswordMatch){

   if(err){
    return res.json(response);
   }

    if(isPasswordMatch && !err){

      //res.send(process.env.JWT_SECRET);

      let payload = {
        sub : user.id,
        iat : moment().unix(),
        name : user.user_name,
        exp :  moment().add(30,'days').unix()

      }


      let token = jwt.sign(payload, process.env.JWT_SECRET);
      response.token = token;

      return res.json(response);

    }

    return res.json(response);
    

    //Issue a JWT token 

    


  });




  




  
  
});

module.exports = router;
