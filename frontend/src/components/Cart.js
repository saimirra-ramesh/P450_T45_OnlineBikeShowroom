import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import Nav from './Nav.js';
import { useCart } from './CartContext';
import { fetchCartItems, removeFromCart } from './CartApi';
import { useAuth } from './AuthContext.js';
import { toast } from 'react-toastify';

const Cart = () => {

  const { cartItems, setCartItems } = useCart();
  const { isLoggedIn } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchItems();
  }, [setCartItems]);

  const handleRemoveFromCart = async (itemData) => {
    try {
      await removeFromCart(itemData);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemData.productId));

      toast.success('Item removed successfully');

      //Reload page after removal
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const handleBuyNow = () => {
    window.location.href = '/#/payment';
  };

  const handleTotalPriceChange = (newTotalPrice) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + newTotalPrice);
  };

  if (!isLoggedIn) {
    return (
      <div>
        <Nav />
        <h4 style={{ padding: "25px" }}>Please log in to access the cart.</h4>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item._id} item={item} removeFromCart={handleRemoveFromCart} onTotalPriceChange={handleTotalPriceChange} />
      ))}
    <div>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={handleBuyNow}>Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;