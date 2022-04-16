var express = require('express');
var router = express.Router();
let passport = require('passport');

let postsController = require('../controllers/posts/postsController');


router.get('/',postsController.index);
router.get('/category/:title',postsController.postsByCategory);
router.get('/:id/:slug',postsController.postDetail);

router.post('/create',passport.authenticate('jwt', { session: false}),postsController.createPost);
router.patch('/:id/edit',passport.authenticate('jwt', { session: false}),postsController.updatePost);

module.exports = router;
