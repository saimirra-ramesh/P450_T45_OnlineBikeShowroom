import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct } from '../components/Product';
import Nav from './Nav.js';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId) => {

    const isConfirmed = window.confirm('Are you sure you want to delete this product?');

    if (isConfirmed) {
      try {
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
      
      <Link to="/add-bike" className="button add-product-button" >Add Product</Link>
      {/* <h2>Product List </h2> */}
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
              <td>
                <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '50px', maxHeight: '50px' }} />
              </td>
              <td>{product.price}</td>
              <td>
                <Link to={`/products/${product._id}`} className="button view-button">View</Link>{' '}
                <Link to={`/products/${product._id}/update`} className="button update-button">Update</Link>{' '}
                <button onClick={() => handleDelete(product._id)} className="button delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Dashboard;
