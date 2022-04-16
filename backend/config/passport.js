var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

let { UsersModel } = require('../models');
let passport = require('passport');
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {

  UsersModel.findOne({where : {id : jwt_payload.sub}}).then(function(user){
    return done(null, user);
  }).catch(function(err){
    console.log(err);
    
    return done(err, false);
  });
})
);