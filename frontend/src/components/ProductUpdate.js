import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Nav from './Nav.js';

const ProductUpdate = ({ match }) => {
    const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [updateFields, setUpdateFields] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateFields({ ...updateFields, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5555/products/${productId}/update`, updateFields);
      console.log('Product Updated successfully');
      setStatus('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error);
      setStatus('Error updating product');
    }
  };

  return (
    <div>
        <Nav />
      <h2>Update Product</h2>
      <form>
        {Object.keys(product).map((field) => (
          <div key={field} className="form-group">
            <label>{field}: </label>
            <input
              type="text"
              name={field}
              value={updateFields[field] || product[field]}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
      <p>{status}</p>
      <p></p>
      <Link to="/admin">Go Back to Dashboard</Link>
    </div>
  );
};

export default ProductUpdate;

