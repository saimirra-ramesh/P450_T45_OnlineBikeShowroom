// components/Home.js
import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../components/Product';
import ProductView from './ProductView';
import './ProductView.css'; // Import the CSS file
import Nav from './Nav.js';

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Nav />
      <h2>Home Page and all required stuff, with products for sale below</h2>

      <ul>
        {products.map((product) => (
          <li key={product._id} onClick={() => handleProductClick(product)}>
            {product.name}
          </li>
        ))}
      </ul>

      {selectedProduct && <ProductView product={selectedProduct} />}
    </div>
  );
}

export default Home;
