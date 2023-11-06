import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../components/Product';

function Home()
{
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.log("error")
      }
    };

    fetchData();
  }, []);

    return (
        <div>
          <h2>Home Page and all required stuff, with products for sale below</h2> 
          <ul>
        {products.map(product => (
          <li key={product._id}>
            <strong>{product.name}</strong> - {product.description} - ${product.price}
          </li>
        ))}
      </ul>
      <h2>over</h2> 
        </div>
      );
}
export default Home;