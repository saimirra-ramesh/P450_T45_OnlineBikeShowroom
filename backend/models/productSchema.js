const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String},
  description:{type: String},
  price: {type: Number},
  brand: {type: String},
  category: {type: String},
  imageUrl:{type: String},
  rating: {type: Number},
  color:{type: String}
},{
  collection:"bike"
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;