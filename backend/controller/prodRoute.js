const express = require("express");
const mongoose = require("mongoose");
const prodRoute = new express.Router();

const productSchema = require("../models/productSchema");
const productDbUrl = mongoose.createConnection("mongodb+srv://friedcheesee:abcde@cluster0.vqdpm1s.mongodb.net/bike?retryWrites=true&w=majority");
productDbUrl.on('error', console.error.bind(console, 'MongoDB connection error:'));
productDbUrl.once('open', () => {
  console.log('Connected to MongoDB Bike DB');
});
// const Product = productDbUrl.model("scooters", productSchema);

// Aditi's Update
// const Bike = productDbUrl.model("bike", productSchema);
// const Scooter = productDbUrl.model("scooters", productSchema);
// const Superbikes = productDbUrl.model("superbikes", productSchema);
// const UsedBikes = productDbUrl.model("usedbikes", productSchema);



const getModel = (modelName) => {
  return productDbUrl.model(modelName, productSchema);
};

// Generalised
// Get all products in the DB
prodRoute.get("/", async (req, res) => {
  try {
    const collections = await productDbUrl.db.listCollections().toArray();
    const collectionNames = collections.map(collection => collection.name);

    const allProducts = await Promise.all(collectionNames.map(modelName => getModel(modelName).find()));
    const products = [].concat(...allProducts);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Original
// Get all products
// prodRoute.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// Aditi's Update
// Fetch data for a specific category
// prodRoute.get("/category/:category", async (req, res) => {
//   const category = req.params.category;
//   try {

//     // Use a switch case to determine the model based on the category
//     let model;
//     switch (category) {
//       case "bike":
//         model = Bike;
//         break;
//       case "scooters":
//         model = Scooter;
//         break;
//       case "superbikes":
//         model = Superbikes;
//         break;
//         case "usedbikes":
//           model = UsedBikes;
//           break;
//       default:
//         res.status(400).json({ error: "Invalid category" });
//         return;
//     }

//     const products = await model.find();
//     console.log(`Fetched ${category} products:`, products);

//     res.status(200).json(products);
//   } catch (error) {
//     console.error(`Error fetching ${category} products:`, error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }

// });

// Original
// Search for a product using the search bar
// prodRoute.get('/search', async (req, res) => {
//   try {
//     const { query } = req.query;
//     // console.log('Received search query:', query);

//     const results = await Product.find({
//       $text: { $search: query },
//     });

//     res.status(200).json(results);    
//   }

//   catch (error) {
//     console.error("Error fetching product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }

// });

// Generalised
// Search for a product using the search bar
prodRoute.get('/search', async (req, res) => {
  try {
    const { query } = req.query;

    // Fetch all collections dynamically
    //const db = productDbUrl.connection.client.db;
    const collections = await productDbUrl.db.listCollections().toArray();
    const collectionNames = collections.map(collection => collection.name);

    // Use getModel to dynamically search in each collection
    const searchResults = await Promise.all(collectionNames.map(modelName => {
      const model = getModel(modelName);
      return model.find({ $text: { $search: query } });
    }));

    // Flatten the array of search results from different collections
    const results = [].concat(...searchResults);

    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//NEW -- Aditi's Updates
// Get a specific product by ID
// prodRoute.get("/:productId", async (req, res) => {
//   try {
//     const productId = req.params.productId;
//     console.log('Received search id:', productId);

//     if (!mongoose.Types.ObjectId.isValid(productId)) {
//       return res.status(400).json({ error: "Invalid Product ID format" });
//     }

//     // Try to find the product in each model
//     const models = [Bike, Scooter, Superbikes, UsedBikes];

//     let product = null;
//     let category = null;

//     for (const model of models) {
//       product = await model.findById(productId);
//       if (product) {
//         category = model.modelName.toLowerCase();
//         break;
//       }
//     }

//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     res.status(200).json({ category, product });
//     console.log("Search results: ", product);
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// Original
// Get a specific product by ID
// prodRoute.get("/:productId", async (req, res) => {
//   try {
//     const productId = req.params.productId;
//     console.log('Received search id:', productId);

//     if (!mongoose.Types.ObjectId.isValid(productId)) {
//       return res.status(400).json({ error: "Invalid Product ID format" });
//     }

//     const product = await Product.findById(productId);

//     if (!product) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     res.status(200).json(product);
//     console.log("Search results: ", product);

//   } catch (error) {
//     console.error("Error fetching product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Generalised
// Get a specific product by ID
prodRoute.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log('Received search id:', productId);

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid Product ID format" });
    }

    // Fetch all collections dynamically using the connection object
    const collections = await productDbUrl.db.listCollections().toArray();
    const collectionNames = collections.map(collection => collection.name);

    let product = null;

    for (const modelName of collectionNames) {
      const model = getModel(modelName);
      const result = await model.findById(productId);

      console.log('Collection:', model.modelName);
      console.log('Product:', result);

      if (result) {
        product = result;
        break;  // exit the loop when a product is found
      }
    }

    if (product) {
      // Product found, handle accordingly
      console.log("Search results: ", product);
      res.status(200).json(product);
    } else {
      // Product not found
      res.status(404).json({ error: "Product not found" });
    }

  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// Generalised
// Fetch data for a specific collection
prodRoute.get("/collection/:collection", async (req, res) => {
  const collectionName = req.params.collection;
  try {
    const model = getModel(collectionName.toLowerCase());

    if (!model) {
      res.status(400).json({ error: "Invalid collection" });
      return;
    }

    console.log('model: ', model);
    const products = await model.find();
    console.log(`Fetched ${collectionName} products:`, products);

    res.status(200).json(products);
  } catch (error) {
    console.error(`Error fetching ${collectionName} products:`, error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Aditi's Update
// Add the product to the right colection
// Add a new bike
// prodRoute.post("/add-bike", async (req, res) => {
//   const newProduct = new Bike(req.body);

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Add a new scooter
// prodRoute.post("/add-scooters", async (req, res) => {
//   const newProduct = new Scooter(req.body);

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Add a new superbike
// prodRoute.post("/add-superbikes", async (req, res) => {
//   const newProduct = new Superbikes(req.body);

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Add a new usedbike 
// prodRoute.post("/add-usedbikes", async (req, res) => {
//   const newProduct = new UsedBikes(req.body);

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// Original
// // Add a new product
// prodRoute.post("/add-bike", async (req, res) => {
//   const newProduct = new Product(req.body);

//   try {
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


// Generalised
// To add a new product
prodRoute.post("/add-product/:category", async (req, res) => {
  const category = req.params.category;

  try {
    // Dynamically determine the model based on the category
    const model = getModel(category);

    if (!model) {
      res.status(400).json({ error: "Invalid category" });
      return;
    }

    const newProduct = new model(req.body);
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Aditi's Update
// Update a product by ID
// prodRoute.put("/:productId/update", async (req, res) => {
//   const productId = req.params.productId;

//   try {
//     // Fetch the existing product
//     const existingProduct = await getProductById(productId, req.query.category);

//     if (!existingProduct) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     // Update only the fields provided in the request body
//     Object.keys(req.body).forEach((field) => {
//       existingProduct[field] = req.body[field];
//     });

//     // Save the updated product
//     const updatedProduct = await existingProduct.save();

//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     console.error("Error updating product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Helper function to get a product by ID and category
// async function getProductById(productId, category) {
//   try {
//     let model;

//     switch (category) {
//       case "bike":
//         model = Bike;
//         break;
//       case "scooters":
//         model = Scooter;
//         break;
//       case "superbikes":
//         model = Superbikes;
//         break;
//       case "usedbikes":
//         model = UsedBikes;
//         break;
//       default:
//         throw new Error("Invalid category");
//     }

//     return await model.findById(productId);
//   } catch (error) {
//     throw error;
//   }
// }

// Generalised
prodRoute.put("/:productId/update", async (req, res) => {
  const productId = req.params.productId;
  
  try {
    const updatedProduct = await updateProductById(productId, req.body);

    console.log('Updated Product: ', updatedProduct);

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Helper function to update a product by ID across all collections
async function updateProductById(productId, updateFields) {
  try {
    const collections = await productDbUrl.db.listCollections().toArray();
    const collectionNames = collections.map(collection => collection.name);

    for (const collectionName of collectionNames) {
      const model = getModel(collectionName);
      const existingProduct = await model.findById(productId);

      if (existingProduct) {
        // Update only the fields provided in the updateFields object
        Object.keys(updateFields).forEach((field) => {
          existingProduct[field] = updateFields[field];
        });

        // Save the updated product
        const updatedProduct = await existingProduct.save();
        return updatedProduct;
      }
    }

    return null; // Product not found in any collection
  } catch (error) {
    throw error;
  }
}


// Original
// // Delete a product by ID
// prodRoute.delete("/:productId", async (req, res) => {
//   const productId = req.params.productId;

//   try {
//     const deletedProduct = await Product.findByIdAndDelete(productId);

//     if (!deletedProduct) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Aditi's Update
// Delete a product by ID
// prodRoute.delete("/:productId", async (req, res) => {
//   const productId = req.params.productId;

//   try {
//     // Determine the model based on the category
//     const category = req.query.category;
//     let model;

//     switch (category) {
//       case "bike":
//         model = Bike;
//         break;
//       case "scooters":
//         model = Scooter;
//         break;
//       case "superbikes":
//         model = Superbikes;
//         break;
//       case "usedbikes":
//         model = UsedBikes;
//         break;
//       default:
//         return res.status(400).json({ error: "Invalid category" });
//     }

//     const deletedProduct = await model.findByIdAndDelete(productId);

//     if (!deletedProduct) {
//       return res.status(404).json({ error: "Product not found" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting product:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// Generalised
prodRoute.delete("/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    const deletedProduct = await deleteProductById(productId);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Helper function to delete a product by ID across all collections
async function deleteProductById(productId) {
  try {
    const collections = await productDbUrl.db.listCollections().toArray();
    const collectionNames = collections.map(collection => collection.name);

    for (const collectionName of collectionNames) {
      const model = getModel(collectionName);
      const deletedProduct = await model.findByIdAndDelete(productId);

      if (deletedProduct) {
        return deletedProduct;
      }
    }

    return null; // Product not found in any collection
  } catch (error) {
    throw error;
  }
}


module.exports = prodRoute;