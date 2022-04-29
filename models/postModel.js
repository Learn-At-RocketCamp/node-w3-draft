const mongoose = require('mongoose');
// #XXX: which?
// const Schema = require('mongoose');
// const Schema = mongoose.Schema

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 17,
    required: [true, '未填寫姓名'],
  },

  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   /**
  //    * #NOTE: ref to userID
  //    * `ref:` === <collection-name>
  //    */
  //   ref: user,
  // },

  content: {
    type: String,
    minLength: 3,
    required: [true, '未填寫內文'],
  },
  tags: [
    {
      type: String,
      minLength: 2,
      required: [true, '未填寫標籤'],
    },
  ],
  /** end of Schema-required */

  image: {
    type: String,
    default: '',
  },

  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  /** end of Schema-default */

  createdAt: {
    type: Date,
    /**
     * #NOTE: do not run fn()
     * only have to reg it, or time will repeat
     */
    // default: Date.now(),
    default: Date.now,
    select: false,
  },
});

module.exports = mongoose.model('Post', PostSchema);

/**
 * #doc:
 * https://mongoosejs.com/docs/schematypes.html#number-validators
 */
