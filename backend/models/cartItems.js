const mongoose = require('mongoose');
const productSchema = require('./productSchema');
const userSchema = require('./userSchema');

const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', userSchema);

const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
    collection: "Cart"
});


module.exports = cartItemSchema;