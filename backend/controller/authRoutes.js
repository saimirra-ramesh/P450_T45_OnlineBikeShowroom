const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

// Signup route
router.post('/signup', async (req, res) => {
    try {
        // Extract user data from the request body
        const { firstName, lastName, email, phoneNumber, userName, password, address } = req.body;

        // Create a new user in the database
        const newUser = new User({ firstName, lastName, email, phoneNumber, userName, password, address });
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        // Handle errors (e.g., duplicate username or email)
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
