import React, { useEffect } from 'react';
import CartItem from './CartItem';
import { useCart } from './CartContext';
import { fetchCartItems, removeFromCart } from './CartApi';

const Cart = () => {

  const { cartItems, setCartItems } = useCart();

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

  const handleRemoveFromCart = async (itemId) => {
    try {
      await removeFromCart(itemId);
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item._id} item={item} removeFromCart={handleRemoveFromCart} />
      ))}
    </div>
  );
};

export default Cart;