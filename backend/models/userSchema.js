const mongoose = require('mongoose');

mongoose.connection.close(function () {
    mongoose.connect('mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Users', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to User database');
    })
    .catch((error) => {
        console.log(error);
    });
  });
  

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
}, {
    collection:'Users'
});

const User = mongoose.model('Users', userSchema, 'Users');

module.exports = User;