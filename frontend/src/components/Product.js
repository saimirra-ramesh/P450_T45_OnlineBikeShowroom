import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('http://localhost:5555/products/');
    console.log("fetched")
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};