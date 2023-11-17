import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../components/Product';
import ProductView from './ProductView';
import './ProductView.css'; 
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
      <h2>Demo Product page</h2>
      <div>
      <ul>
        {products.map((product) => (
          <li
          style={{ color: "#FFFFFF", cursor: "pointer" }}
          key={product._id}
          onClick={() => handleProductClick(product)}
        >
            {product.name}
          </li>
        ))}
      </ul>
      </div>
      {selectedProduct && <ProductView product={selectedProduct} />}
    </div>
  );
}

export default Home;
