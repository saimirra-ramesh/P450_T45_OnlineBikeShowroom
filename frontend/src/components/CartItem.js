import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <p>{item.product.name}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeFromCart(item._id)}>Remove</button>
    </div>
  );
};

export default CartItem;