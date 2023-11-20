import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server when the component mounts
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5555/cart');
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const removeFromCart = async (itemId) => {
    try {
      // Perform API call to remove item from the server
      await fetch(`http://localhost:5555/cart/${itemId}`, { method: 'DELETE' });
      // Update state to remove item from the local cartItems
      setCartItems((prevItems) => prevItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item._id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;