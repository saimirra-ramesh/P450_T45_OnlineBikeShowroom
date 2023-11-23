import React, { useState, useEffect } from 'react';
import { fetchProductById } from './Product.js';
import { useAuth } from './AuthContext.js';
import { jwtDecode } from 'jwt-decode';

const CartItem = ({ item, removeFromCart, onTotalPriceChange }) => {
  const { authToken } = useAuth();
  const [productDetails, setProductDetails] = useState(null);

  const getUserIdFromToken = (token) => {
    const decodedToken = jwtDecode(token);
    return decodedToken.userId;
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (authToken && item.userId === getUserIdFromToken(authToken)) {
          const product = await fetchProductById(item.productId);
          setProductDetails(product);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [item.productId, authToken]);

  const totalPrice = productDetails ? item.quantity * productDetails.price : 0;

  useEffect(() => {
    onTotalPriceChange(totalPrice);
  }, [totalPrice]);


  return (
    <div>
      {authToken && item.userId === getUserIdFromToken(authToken) && productDetails && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{productDetails.name}</td>
                <td>
                  <img src={productDetails.imageUrl} alt="Product Image" style={{ height: '75px' }} />
                </td>
                <td>{item.quantity}</td>
                <td>{productDetails.price}</td>
                <td>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
      )}

    </div>
  );
};

export default CartItem;
