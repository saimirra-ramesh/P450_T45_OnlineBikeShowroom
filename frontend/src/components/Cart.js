import React, { useEffect } from 'react';
import CartItem from './CartItem';
import Nav from './Nav.js';
import { useCart } from './CartContext';
import { fetchCartItems, removeFromCart } from './CartApi';
import { useAuth } from './AuthContext.js';
import { toast } from 'react-toastify';

const Cart = () => {

  const { cartItems, setCartItems } = useCart();
  const { isLoggedIn } = useAuth();

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const items = await fetchCartItems();
        setCartItems(items);
        console.log('Cart.js, itemId, fetch: ', items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchItems();
  }, [setCartItems]);

  const handleRemoveFromCart = async (itemData) => {
    try {
      console.log('Cart.js, itemData, delete: ', itemData);
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
        <CartItem key={item._id} item={item} removeFromCart={handleRemoveFromCart} />
      ))}
    </div>
  );
};

export default Cart;