const express = require("express");
const cartRoute = express.Router();
const mongoose = require("mongoose");
const authenticateUser = require("../middleware/authenticate");

const productSchema = require("../models/productSchema"); // Import the product schema
const cartItemSchema = require("../models/cartItems");

const cartDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/Cart?retryWrites=true&w=majority");
const Cart = cartDbUrl.model("Cart", cartItemSchema);
const Product = cartDbUrl.model("Product", productSchema); // Create the product model with the same connection
// Get all cart items
cartRoute.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('productId'); // Populate the 'productId' field with actual product details
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add item to the cart
cartRoute.post("/add", authenticateUser, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id; 

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
cartRoute.delete("/remove/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  const userId = req.user._id; // Assuming you have middleware to authenticate users

  try {
    const cartItem = await Cart.findOneAndDelete({ _id: itemId, userId });

    if (!cartItem) {
      return res.status(404).json({ error: "Item not found in the cart" });
    }

    res.status(200).json(cartItem);
  } catch (error) {
    console.error("Error removing item from cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = cartRoute;
