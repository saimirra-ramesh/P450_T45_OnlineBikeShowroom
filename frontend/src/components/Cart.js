import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Fetch cart items from session storage
    const storedItems = sessionStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    // Calculate total amount whenever cart items change
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(total);
  }, [cartItems]);

  const handleQuantityChange = (productId, newQuantity) => {
    // Update quantity for the specified product in the cart
    const updatedCartItems = cartItems.map(item => {
      if (item.productId === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    // Update session storage with the new cart items
    sessionStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '10px' }}>Product ID</th>
            <th style={{ padding: '10px' }}>Name</th>
            <th style={{ padding: '10px' }}>Price</th>
            <th style={{ padding: '10px' }}>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.productId}>
              <td style={{ padding: '10px' }}>{item.productId}</td>
              <td style={{ padding: '10px' }}>{item.name}</td>
              <td style={{ padding: '10px' }}>${item.price}</td>
              <td style={{ padding: '10px' }}>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value, 10))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {renderCartItems()}
      <p>Total Amount to be Paid: ${totalAmount}</p>
    </div>
  );
};

export default Cart;
