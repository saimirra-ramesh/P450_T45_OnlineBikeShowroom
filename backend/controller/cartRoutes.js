const express = require("express");
const cartRoute = express.Router();
const mongoose = require("mongoose");
const authenticateUser = require("../middleware/authenticate");

const cartItemSchema = require("../models/cartItems.js");
const productSchema = require("../models/productSchema.js");

const dbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/");

const CartDb = dbUrl.useDb('Cart');
const Cart = CartDb.model("Cart", cartItemSchema);

// Uncomment this if u think it's not working right
// const bikeDb = dbUrl.useDb('bike');
// const Product = mongoose.model("scooters", productSchema);


// Get all cart items
cartRoute.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    console.log("cartRoutes.js, cartItems, fetch: ", cartItems)
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
  console.log("cartRoutes.js, productId, add: ", productId);

  try {
    const cartItem = new Cart({ productId, quantity, userId });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a product by ID
cartRoute.delete("/:userId/:productId", async (req, res) => {
  const { userId, productId } = req.params;

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

module.exports = cartRoute;
