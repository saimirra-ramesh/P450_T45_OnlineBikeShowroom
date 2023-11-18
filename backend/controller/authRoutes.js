const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, userName, password, address } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { userName }] });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email or username already exists' });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
      userName,
      password: hashedPassword,
      address,
    });

    await newUser.save();

    res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
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

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
