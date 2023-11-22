const mongoose = require('mongoose');
const userSchema = require('./userSchema');
const productSchema = require('./productSchema');


// const bikeDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/bike?retryWrites=true&w=majority");
// const usersDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Users?retryWrites=true&w=majority");

const User = mongoose.model("Users", userSchema);
const Product = mongoose.model("scooters", productSchema);

const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
    collection: "Cart"
});


// const Product = bikeDbUrl.model("scooters", productSchema);
// const User = usersDbUrl.model("Users", userSchema);


module.exports = cartItemSchema;

// const CartItem = mongoose.model('CartItem', cartItemSchema);

// module.exports = cartItemSchema;