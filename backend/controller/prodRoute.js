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

// Add a new product
prodRoute.post("/add-bike", async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update a product by ID
prodRoute.put("/:productId/update", async (req, res) => {
  const productId = req.params.productId;

  try {
    // Fetch the existing product
    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update only the fields provided in the request body
    Object.keys(req.body).forEach((field) => {
      existingProduct[field] = req.body[field];
    });

    // Save the updated product
    const updatedProduct = await existingProduct.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a product by ID
prodRoute.delete("/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = prodRoute;