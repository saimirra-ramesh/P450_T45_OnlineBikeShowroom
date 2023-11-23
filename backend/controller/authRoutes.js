const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const userSchema = require("../models/userSchema");
const usersDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Users?retryWrites=true&w=majority");
const User = usersDbUrl.model("User", userSchema);
const util = require('util');
const nodemailer = require('nodemailer');
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


// Promisify the nodemailer.sendMail function


// Route for Forgot Password
router.post('/forgot-password', async (req, res) => {
    try {
        const { userName, email } = req.body;

        // Check if the user exists
        const user = await User.findOne({ userName, email });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Generate a unique token for password reset
        const resetToken = jwt.sign({ userId: user._id }, 'your-reset-secret-key', { expiresIn: '1h' });

        // Save the reset token to the user in the database
        user.resetToken = resetToken;
        await user.save();

        // Send a password reset email to the user
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sender@gmail.com',
                pass: 'password',
            },
        });

        const mailOptions = {
            from: 'ieeedemo754@gmail.com',
            to: user.email,
            subject: 'Password Reset',
            text: `Click the following link to reset your password: http://your-frontend-url/reset-password/${resetToken}`,
        };

        // Use the sendMail function of the transporter
        await transporter.sendMail(mailOptions);

        console.log('Email sent successfully');
        return res.json({ success: true, message: 'Password reset email sent successfully' });
    } catch (error) {
        console.error('Error during password reset:', error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;