const mongoose = require('mongoose');

// post model.
const PostModel = mongoose.model(
  'posts',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlegth: 52,
    },
    // todo- embedd user schema, categories
    description: {
      type: String,
      required: true,
      unique: true,
      minlength: 20,
      maxlegth: 800,
    },
    datePosted: {
      type: Date,
      default: Date.now,
      required: true,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  })
);

exports.PostModel = PostModel;
