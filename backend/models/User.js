const mongoose = require('mongoose');

// User schema definition
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, default: '' },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

// Create and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;
