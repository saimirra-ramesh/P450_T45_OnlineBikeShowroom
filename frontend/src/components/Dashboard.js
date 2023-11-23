import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct, fetchProductsByCategory } from '../components/Product';
import Nav from './Nav.js';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  // NEW
  const [selectedCategory, setSelectedCategory] = useState('bike');

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const fetchData = async () => {
    try {
      const productsData = await fetchProductsByCategory(selectedCategory);
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // NEW
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const productsData = await fetchProducts();
  //       setProducts(productsData);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // NEW
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // NEW

  const handleDelete = async (productId, category) => {

    const isConfirmed = window.confirm('Are you sure you want to delete this product?');

    if (isConfirmed) {
      try {
        // await deleteProduct(productId, category);
        await deleteProduct(productId);
        // Refresh the product list after deletion
        const updatedProducts = await fetchProducts();
        setProducts(updatedProducts);
        toast.success('Product deleted successfully!');
      } catch (error) {
        console.error('Error deleting product:', error);
        toast.error('Error deleting product');
      }
    }
  };

  return (
    
    <div style={{ backgroundColor: 'white', color: 'black'}}>
      <Nav />
      
      {/* NEW */}
      <div>
        <Link to="/add-bike" className="button add-product-button">Add Product</Link>
        <label style={{paddingRight: "5px"}}>Select Category: </label>
        <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
          <option value="bike">Bike</option>
          <option value="scooters">Scooters</option>
          <option value="superbikes">Superbikes</option>
          <option value="bikeaccessories">bikeaccessories</option>
          
        </select>

        <p></p>
        <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Collection</h2>

      </div>
      {/* NEW */}

      {/* <Link to="/add-bike" className="button add-product-button" >Add Product</Link> */}
      
      <p></p>
      <table >
        <thead>
          <tr>
            <th>Category</th>
            <th>Brand</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.category}</td>
              <td>{product.brand}</td>
              <td>{product.name}</td>
              <td width='150px' >
                <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '200px', maxHeight: '200px', }} />
              </td>
              <td>{product.price}</td>
              <td>
                <Link to={`/products/${product._id}`} className="button view-button">View</Link>{' '}
                <Link to={`/products/${product._id}/update`} className="button update-button">Update</Link>{' '}
                <button onClick={() => handleDelete(product._id,product.category)} className="button delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Dashboard;
