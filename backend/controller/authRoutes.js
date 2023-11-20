const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const userSchema = require("../models/userSchema");
const usersDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Users?retryWrites=true&w=majority");
const User = usersDbUrl.model("User", userSchema);

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, userName, password, address } = req.body;

        // Hash the password before saving it in the database
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ firstName, lastName, email, phoneNumber, userName, password: hashedPassword, address });
        await newUser.save();

        res.status(201).json({ message:'Signup successful', user: newUser });
    } catch (error) {
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

        // Use bcrypt to compare hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({ userId: user._id }, 'your-secret-key');

            user.tokens = user.tokens.concat({ token });
            await user.save();

            return res.json({ success: true, message: 'Login successful', token });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;