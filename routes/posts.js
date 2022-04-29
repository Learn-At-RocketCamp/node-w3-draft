const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/postsController.js');

// const Post = require('../models/postModel.js');
// router.get('/', async (req, res, next) => {
//   const post = await Post.find();
//   res.status(200).json({
//     post,
//   });
// });

router.get('/', PostsController.getPosts);
router.post('/', PostsController.createPosts);

module.exports = router;

// #TODO: merge controllers and model
