const mongoose = require('mongoose');

mongoose.connection.close(function () {
  mongoose.connect('mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/bike', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to bike database');
})
.catch((error) => {
    console.log(error);
});
});

const productSchema = new mongoose.Schema({
  name: {type: String},
  description:{type: String},
  price: {type: Number},
  brand: {type: String},
  category: {type: String},
  imageUrl:{type: String},
  rating: {type: Number},
  color:{type: String},
  brake:{type: String},
  fuelcapacity:{type: String},
  mileage:{type: Number},
  enginetype:{type: String},
  displacement:{type: Number},
  seater:{type: String},
},{
  collection:"bike"
});

const Product = mongoose.model('bike', productSchema, 'bike');

module.exports = Product;