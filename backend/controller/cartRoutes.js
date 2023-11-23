const express = require("express");
const cartRoute = express.Router();
const mongoose = require("mongoose");
const authenticateUser = require("../middleware/authenticate");


// const cartItemSchema = require("../models/cartItems");
// const cartDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Cart?retryWrites=true&w=majority");
// const Cart = cartDbUrl.model("Cart", cartItemSchema);

// // const productSchema = require("../models/productSchema"); // Import the product schema
// // const productDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/bike?retryWrites=true&w=majority");
// // const Product = productDbUrl.model("scooters", productSchema); // Create the product model with the same connection


// const bikeSchema = require("../models/productSchema");
// const bikeDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/bike?retryWrites=true&w=majority");
// const Product = bikeDbUrl.model("scooters", bikeSchema);

// Added rn
const cartItemSchema = require("../models/cartItems.js");
const productSchema = require("../models/productSchema.js");

const dbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/");

const CartDb = dbUrl.useDb('Cart');
const Cart = CartDb.model("Cart", cartItemSchema);

const bikeDb = dbUrl.useDb('bike');
const Product = mongoose.model("scooters", productSchema);
// Added rn -- end

// Get all cart items
cartRoute.get("/", async (req, res) => {
  try {
    // const cartItems = await Cart.find().populate('productId');  // Populate the 'productId' field with actual product details
    
    const cartItems = await Cart.find();
    // console.log("productId in cartRoutes.js: ", cartItems);
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("cartRoutes.js, Error fetching cart items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add item to the cart
cartRoute.post("/add", authenticateUser, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id; 

  // console.log("Token in cartRoutes.js: ", userId);

  try {
    const cartItem = new Cart({ productId, quantity, userId });
    await cartItem.save();

    res.status(201).json(cartItem);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Remove item from the cart

// cartRoute.delete("/remove/:itemId", authenticateUser, async (req, res) => {
  
//   const itemId = req.params.itemId;
//   console.log("CartRoutes.js, productID, remove: ", itemId);

//   const userId = req.user._id; // Assuming you have middleware to authenticate users

//   try {
//     const cartItem = await Cart.findOneAndDelete({ _id: itemId, userId });

//     if (!cartItem) {
//       return res.status(404).json({ error: "Item not found in the cart" });
//     }

//     res.status(200).json(cartItem);
//   } catch (error) {
//     console.error("Error removing item from cart:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// cartRoute.delete("/remove/:productId", async (req, res) => {
  
//   const {productId} = req.params;
//   const { userId } = req.body;

//   try {
  
//     const cartItem = await Cart.findOneAndDelete({ _id: productId, userId });

//     console.log("CartRoutes.js, productID, remove: ", productId);
//     console.log("CartRoutes.js, userID, remove: ", userId);

//     if (!cartItem) {
//       return res.status(404).json({ error: "Item not found in the cart" });
//     }

//     res.status(200).json(cartItem);

    
//   } catch (error) {
//     console.error("Error removing item from cart:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// Delete a product by ID
cartRoute.delete("/:userId/:productId", async (req, res) => {
  const { userId, productId } = req.params;
  console.log("CartRoutes.js, userId, productId, remove: ", userId, productId);

  try {
    const deletedProduct = await Cart.findOneAndDelete({ userId, productId });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// cartRoute.delete("/remove", async (req, res) => {
//   console.log("Received DELETE request:", req.body);
  
//   const { productId, quantity, userId } = req.body;
  
//   try {

//     console.log("CartRoutes.js, productID, remove: ", productId);
//     console.log("CartRoutes.js, userID, remove: ", userId);
//     const cartItem = await Cart.findOneAndDelete({ _id: productId, userId });

//     if (!cartItem) {
//       return res.status(404).json({ error: "Item not found in the cart" });
//     }

//     res.status(200).json(cartItem);
//   } catch (error) {
//     console.error("Error removing item from cart:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = cartRoute;
