const jwt = require('jsonwebtoken');
const userSchema = require('../models/userSchema');
const usersDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Users?retryWrites=true&w=majority");
const User = usersDbUrl.model("User", userSchema);

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log('Token in Middleware:', token);

    const decoded = jwt.verify(token, 'your-secret-key');
    console.log('Decoded:', decoded);

    const user = await User.findById(decoded.userId);
    console.log('User:', user);

    // console.log('Token Expiry:', new Date(decoded.exp * 1000));

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: 'Please authenticate.' });
  }
};

module.exports = authenticateUser;
