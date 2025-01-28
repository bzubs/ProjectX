const mongoose = require('mongoose');

// Like schema definition
const likeSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

// Create and export the model
const Like = mongoose.model('Like', likeSchema);
module.exports = Like;
