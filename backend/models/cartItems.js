// cartItems.js

const mongoose = require('mongoose');
const productSchema = require('./productSchema');
const userSchema = require('./userSchema');
const bikeDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/bike?retryWrites=true&w=majority");
const usersDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Users?retryWrites=true&w=majority");


const Product = bikeDbUrl.model('Product', productSchema);
const User = usersDbUrl.model('User', userSchema);


const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
    collection: "Cart"
});

module.exports = cartItemSchema;
const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = cartItemSchema;