const express = require("express");
const prodRoute = new express.Router();

const bikeSchema = require("../models/productSchema");
const bikeDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/bike?retryWrites=true&w=majority");
const Product = bikeDbUrl.model("bike", bikeSchema);


// Get all products
prodRoute.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Search for a product using the search bar
prodRoute.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    // console.log('Received search query:', query);

    const results = await Product.find({
      $text: { $search: query },
    });

    res.status(200).json(results);
    // console.log("Search results: ", results);
  }

  catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

});


// Get a specific product by ID
prodRoute.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log('Received search id:', productId);

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid Product ID format" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
    console.log("Search results: ", product);

  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = prodRoute;