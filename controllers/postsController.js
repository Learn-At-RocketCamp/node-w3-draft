const Post = require('../models/postModel.js');

module.exports = {
  //   router.get('/', async (req, res, next) => {
  //   const post = await Post.find();
  //   // res.send('respond with a resource');
  //   res.status(200).json({
  //     post,
  //   });
  // });

  // #XXX: async () => { ... } ?
  async getPosts(req, res, next) {
    const post = await Post.find();

    res.status(200).json({
      post,
    });
  },

  async createPosts(req, res, next) {
    try {
      // console.log('req:::', req);
      const { body } = req;
      const newPost = await Post.create(body);
      console.log(newPost);

      res.status(200).send({
        msg: 'OK!',
        data: newPost,
      });
      /* end of try */
    } catch (error) {
      console.log(error);

      res.status(400).send({
        msg: error,
      });
    }
    /* end of catch */
  },
};
