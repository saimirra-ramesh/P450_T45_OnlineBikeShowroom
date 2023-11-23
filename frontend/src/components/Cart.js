import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import Nav from './Nav.js';
import { useCart } from './CartContext';
import { fetchCartItems, removeFromCart } from './CartApi';
import { useAuth } from './AuthContext.js';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

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
    <div paddingBottom="50px">
      <Nav />
      <h2 className='pt-4' style={{paddingBottom: '5px', paddingTop: '20px' }}>Shopping Cart</h2>
      <table>
              <tr>
                <th width='200px'>Name</th>
                <th width='300px'>Image</th>
                <th width='200px'>Quantity</th>
                <th width='200px'>Price</th>
                <th width='200px'>Actions</th>
              </tr>
      </table>
      {cartItems.map((item) => (
        <CartItem key={item._id} item={item} removeFromCart={handleRemoveFromCart} onTotalPriceChange={handleTotalPriceChange} />
      ))}
    <div>
        <p className='pt-4' style={{ color: 'black', fontWeight: 'bold', fontSize: '25px'}}>Total Price: ${totalPrice}</p>
        <Button onClick={handleBuyNow} variant="dark" style={{ marginBottom: '40px', backgroundColor: 'red', color: 'white' }}>Buy Now</Button>
      </div>
    </div>
  );
};

export default Cart;