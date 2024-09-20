const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  
  username: { 
    type: String, 
    required: [true, 'Username is a required field'],
    unique: true },

  email: { 
    type: String, 
    required: [true, 'Email is a required field'],
    },

  password: { 
    type: String, 
    required: [true, 'Password is a required field'],
  }

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
