import axios from 'axios';

const API_URL = 'http://localhost:5555';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/`);
    console.log("fetched")
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; 
  }
};

export const fetchProductById = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  return response.data;
};

export const deleteProduct = async (productId) => {
  await axios.delete(`${API_URL}/products/${productId}`);
};

export const addProduct = async (productData) => {
  const response = await axios.post(`${API_URL}/add-bike`, productData);
  return response.data;
};

export const updateProduct = async (productId, productData) => {
  const response = await axios.put(`${API_URL}/${productId}/update`, productData);
  return response.data;
};