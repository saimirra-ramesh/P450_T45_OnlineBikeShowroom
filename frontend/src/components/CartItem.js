import React, { useState, useEffect } from 'react';
import { fetchProductById } from './Product.js';
import { useAuth } from './AuthContext.js';
import { jwtDecode } from 'jwt-decode';
import { Button } from 'react-bootstrap';

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
          console.log("CartItems.js: ", item.userId, product);
          setProductDetails(product);
          console.log(productDetails);
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
              {/* <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr> */}
            </thead>
            <tbody>
              <tr>
                <td width='200px'>{productDetails.name}</td>
                <td width='300px'>
                  <img src={productDetails.imageUrl} alt="Product Image" style={{ height: '100px' }} />
                </td>
                <td width='200px'>{item.quantity}</td>
                <td width='200px'>{productDetails.price}</td>
                <td width='200px'>
                  {/* <button onClick={() => removeFromCart(item)}>Remove</button> */}
                  <Button variant = 'dark' size='md' onClick={() => removeFromCart(item)} style={{ backgroundColor: 'red', color: 'white' }}>Remove</Button>
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
