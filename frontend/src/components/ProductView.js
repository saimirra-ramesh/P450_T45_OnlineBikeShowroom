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
      <div className="product-top-section">
        <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
        </div>
      <div style={{color: "#FFFFFF", paddingRight: '10px' }} className="product-details">
        <h1 >{product.name}</h1>
        <h4>Brand: {product.brand}</h4>
        Category: {product.category}
        <p>Color: {product.color}</p>
        <div className="rating-container" >
        <h7>Rating: <RatingStars rating={product.rating} /></h7>
        </div>
        <div>
          
          <h3>Price: ${product.price}</h3>
          <p className="discount" >10% Off!</p>
          <s style={{ color: 'grey' }}>MRP: ${product.price + product.price / 10}</s> Inclusive of all taxes.
        </div>
        <div style={{ marginTop: '10px' }}>
          Bike Description: {product.description}
        </div>
        <div className="action-buttons">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
          <button className="compare-btn" onClick={handleCompare}>Compare</button>
        </div>
        
      </div>
      </div>
      <div style={{color: "#FFFFFF", marginTop:'20px'} }>
          <h3>Specifications</h3>
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


  );
};

export default ProductView;
