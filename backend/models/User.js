const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phoneNumber: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
});

const User = model('User', userSchema);

module.exports = User;
