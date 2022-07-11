var express = require('express');
var router = express.Router();
let passport = require('passport');

let profileController = require('../controllers/profile/profileController');

router.get('/posts',passport.authenticate('jwt', { session: false}), profileController.index);

router.get('/',passport.authenticate('jwt', { session: false}), profileController.profileDetails);
// router.post('/create',passport.authenticate('jwt', { session: false}),postsController.createPost);
// router.get('/:id/edit',passport.authenticate('jwt', { session: false}),postsController.editDetails);
// router.patch('/:id/edit',passport.authenticate('jwt', { session: false}),postsController.updatePost);


// router.get('/category/:title',postsController.postsByCategory);
// router.get('/:id/:slug',postsController.postDetail);

module.exports = router;
