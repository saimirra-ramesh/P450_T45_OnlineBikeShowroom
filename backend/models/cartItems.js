const mongoose = require('mongoose');
const userSchema = require('./userSchema');
const productSchema = require('./productSchema');

const User = mongoose.model("Users", userSchema);
const Product = mongoose.model("scooters", productSchema);

const cartItemSchema = new mongoose.Schema({
    // productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    productId: { type: mongoose.Schema.Types.ObjectId},
    quantity: { type: Number, default: 1 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
    collection: "Cart"
});

module.exports = cartItemSchema;