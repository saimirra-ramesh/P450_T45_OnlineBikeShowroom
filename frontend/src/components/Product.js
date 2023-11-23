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

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
export const deleteProduct = async (productId, category) => {
  await axios.delete(`${API_URL}/products/${productId}/?category=${category}`);
};

export const addProduct = async (productData) => {
  const response = await axios.post(`${API_URL}/add-bike`, productData);
  return response.data;
};

export const updateProduct = async (productId, productData) => {
  const response = await axios.put(`${API_URL}/${productId}/update`, productData);
  return response.data;
};  