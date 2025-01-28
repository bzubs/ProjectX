const mongoose = require('mongoose');

// Comment schema definition
const commentSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
});

// Create and export the model
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
