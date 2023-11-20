import React from 'react';
import CartItem from './CartItem';
import { useCart } from './CartContext';

const Cart = () => {

  const { cartItems, removeFromCart } = useCart();

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