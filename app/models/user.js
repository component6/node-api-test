const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  pasword: String,
});

mongoose.model('User', UserSchema);
