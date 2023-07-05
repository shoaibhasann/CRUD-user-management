// Import mongoose module
const mongoose = require('mongoose');
// Define user schema
const userSchema = new mongoose.Schema({
       username: {
           type: String,
           required: true,
           unique: true
       },
       useremail: {
           type: String,
           required: true,
           unique: true
       },
       password: {
           type: String,
           required: true
       },
       createdAt: {
           type: Date,
           default: Date.now()
       }
});

// create and export the model
  const User = mongoose.model('User', userSchema);
  module.exports = User;