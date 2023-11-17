import React, { useEffect, useState } from 'react';
import RatingStars from './RatingStars';
import axios from 'axios';
import './ProductView.css'; 
import { useParams} from 'react-router-dom';
import Nav from './Nav.js';

const ProductView = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  
  console.log('Product prop:');

  if (!product) {
    return <div>Product Undefined</div>;  
  }

  const handleAddToCart = () => {
    console.log('Product added to cart:', product);
  };

  const handleCompare = () => {
    console.log('Product added for comparison:', product);
  };

  return (
    <div>
<Nav />
    
    <div className="product-view-container">
      
      <div className="product-top-section">
        <div className="product-image">
        <img src={product?.imageUrl} alt={product?.name} />
        </div>
        <div style={{ color: "#000000", paddingRight: '10px' }} className="product-details">
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#000000"}}>{product.name}</h1>
          <h4>Brand: {product.brand}</h4>
          Category: {product.category}
          <p>Color: {product.color}</p>
          <div className="rating-container" >
            <div>Rating:  <RatingStars rating={Number(product.rating)} /></div>
          </div>
          <div>

            <h3>Price: ${product.price}</h3>
            
            <p className="discount" >10% Off!</p>
            <s style={{ color: 'grey' }}>MRP: ${product.price + product.price / 10}</s> Inclusive of all taxes.
          </div>
          <div style={{ marginTop: '10px' }}>
          <hr style={{ borderColor: 'grey', margin: '5px 0' }} />
            Bike Description: {product.description}
          </div>
          </div>
          <div className="action-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            <button className="compare-btn" onClick={handleCompare}>Compare</button>
          </div>

        </div>
      </div>
      <div className="specs" style={{ color: "#000000", marginTop: '40px', marginBottom : '40px' }}>
        <h3 style={{ color: 'black' }}>Specifications</h3>
        <table>
          <tbody>
            <tr>
              <td>Brake:</td>
              <td>{product.brake}</td>
            </tr>
            <tr>
              <td>Fuel Capacity:</td>
              <td>{product.fuelcapacity}</td>
            </tr>
            <tr>
              <td>Mileage:</td>
              <td>{product.mileage}</td>
            </tr>
            <tr>
              <td>Engine Type:</td>
              <td>{product.enginetype}</td>
            </tr>
            <tr>
              <td>Displacement:</td>
              <td>{product.displacement}</td>
            </tr>
            <tr>
              <td>Seater:</td>
              <td>{product.seater}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>


  );
};

export default ProductView;
