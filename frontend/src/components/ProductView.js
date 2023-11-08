import React from 'react';
import RatingStars from './RatingStars';

const ProductView = ({ product }) => {
  const handleAddToCart = () => {
    console.log('Product added to cart:', product);
  };

  const handleCompare = () => {
    console.log('Product added to comparison:', product);
  };

  return (
    <div className="product-view-container">
      <div className="product-image">
        
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div style={{color: "#FFFFFF"}} className="product-details">
        <h2 >{product.name}</h2>
        <h4><p>Brand: {product.brand}</p></h4>
        <p>Category: {product.category}</p>
        <p>Color: {product.color}</p>
        <div>
          <h4>10% Off!</h4>
          <h3>Price: ${product.price}</h3>
          <s>MRP: ${product.price + product.price / 10}</s> Inclusive of all taxes.
        </div>
        <p>Rating: <RatingStars rating={product.rating} /></p>
       
        
        <div className="action-buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          <button className="compare-btn" onClick={handleCompare}>Compare</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
