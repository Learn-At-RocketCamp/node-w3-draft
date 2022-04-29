const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      select: false,
      default: Date.now,
    },
    email: {
      type: String,
      select: false,
      required: [true, '未填寫電子信箱'],
      minLength: 3,
      unique: true,
      lowercase: true,
    },
    /** end of Schema-select-false */

    name: {
      type: String,
      required: [true, '未填寫姓名'],
      minLength: 2,
      maxLength: 17,
    },
    /** end of Schema-required */

    avatar: {
      type: String,
      default: '',
    },
    /** end of Schema-default */
  },
  /** end of Schema-definition */
  { collection: 'user' }
);

module.exports = mongoose.model('User', UserSchema);
