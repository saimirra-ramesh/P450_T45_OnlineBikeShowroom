import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Nav from './Nav.js';
import { toast } from 'react-toastify';

const ProductUpdate = () => {
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
        toast.error('Error fetching product');
      }
    };

    fetchProduct();
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUpdateFields((prevFields) => {
      const updatedFields = { ...prevFields, [name]: value };
      // Check if the field is empty after the update, and clear it
      Object.keys(updatedFields).forEach((field) => {
        if (updatedFields[field] === '' || field === 'id') {
          delete updatedFields[field];
        }
      });

      return updatedFields;
    });
  };

  const handleUpdate = async () => {
    try {
      const updateData = {
        category: product.category,
        ...updateFields, // Include other fields you want to update
      };

      await axios.put(`http://localhost:5555/products/${productId}/update`, updateData);
      console.log('Product Updated successfully');
      setStatus('Product updated successfully');
      toast.success('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      setStatus('Error updating product');
      toast.success('Error updating product');
    }
  };

  return (
    <div>
      <Nav />
      <h2>Update Product</h2>
      <form>
        {Object.keys(product).map((field) => {
          if (field !== '__v' && field !== '_id') {
            return (
              <div key={field} className="form-group">
                <label>{field}: </label>
                <input
                  type="text"
                  name={field}
                  value={updateFields[field] || product[field]}
                  onChange={handleInputChange}
                />
              </div>
            );
          }
          return null;
        })}

        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>
      <p style={{ color: 'red' }}>{status}</p>
      <p></p>
      <Link to="/admin" style={{ color: 'black' }}>
        Go Back to Dashboard
      </Link>
      <p></p>
    </div>
  );
};

export default ProductUpdate;