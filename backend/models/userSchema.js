const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phoneNumber: { type: String, unique: true, required: true },
    userName: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    tokens: [
        {
            token: {
                type: String,
                index: true, //Added by Radhika on 21st
                required: true
            }
        }
    ]
}, {
    collection: 'Users'
});

// Export schema
module.exports=userSchema;