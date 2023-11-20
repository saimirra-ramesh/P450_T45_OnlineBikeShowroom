const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userSchema = require("../models/userSchema");
const usersDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Users?retryWrites=true&w=majority");
const User = usersDbUrl.model("User", userSchema);

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

// Login route
router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;

        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid user' });
        }

        if (password === user.password) {
            const token = jwt.sign({ userId: user._id }, 'your-secret-key'); // Create a token

             // Save the token to the user model
             user.tokens = user.tokens.concat({ token });
             await user.save();
             
            return res.json({ success: true, message: 'Login successful', token });
        } 
        else {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});


module.exports = router;
