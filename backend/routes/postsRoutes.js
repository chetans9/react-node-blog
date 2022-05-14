var express = require('express');
var router = express.Router();
let passport = require('passport');

let postsController = require('../controllers/posts/postsController');
const multer  = require('multer');
const upload = multer({ dest: "./storage/uploads/" });

router.get('/',postsController.index);


router.post('/create',passport.authenticate('jwt', { session: false}),upload.single('post_image'),postsController.createPost);
router.get('/:id/edit',passport.authenticate('jwt', { session: false}),postsController.editDetails);
router.patch('/:id/edit',passport.authenticate('jwt', { session: false}),postsController.updatePost);


router.get('/category/:title',postsController.postsByCategory);
router.get('/:id/:slug',postsController.postDetail);

module.exports = router;
