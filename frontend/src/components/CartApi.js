import axios from 'axios';

const API_URL = 'http://localhost:5555';

export const fetchCartItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/cart`);
    console.log('CartApi.js, itemId, fetch: ', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

export const addToCart = async (itemData) => {
  try {
    const response = await axios.post(`${API_URL}/cart/add`, itemData);
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

export const removeFromCart = async (itemId) => {
  try {
    console.log('CartApi.js, itemId, delete: ', itemId);
    await axios.delete(`${API_URL}/cart/remove/${itemId}`);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};
