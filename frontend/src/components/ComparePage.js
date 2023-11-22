import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComparePage.css';
import RatingStars from './RatingStars';
import Nav from './Nav';

const ComparePage = () => {
    // Read compared products from local storage
    const initialComparedProducts = JSON.parse(localStorage.getItem('comparedProducts')) || [];
    const [comparedProducts, setComparedProducts] = useState(initialComparedProducts);
  
    const handleDelete = (productId) => {
      // Remove the product from comparedProducts in local storage
      const updatedComparedProducts = comparedProducts.filter(
        (comparedProduct) => comparedProduct._id !== productId
      );
      localStorage.setItem('comparedProducts', JSON.stringify(updatedComparedProducts));
      setComparedProducts(updatedComparedProducts);
    };
return (
    
    <div>
        <Nav />
    <div className="compare-page-container">
        <h1 style={{ color: "#000000" }}>Compare Products</h1>

        {comparedProducts.length > 0 ? (
            <table className="compare-table">
                <thead>
                    <tr>
                        <th>Features</th>
                        {comparedProducts.map((product) => (
                            <th key={product._id}>
                               <div className="header-content">
                                     <Link to={`/products/${product._id}`} style={{ color: "#000000" }}>{product.name}</Link>
                                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                                 </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Table rows for different features */}
                    <tr>
            <td>Image</td>
            {comparedProducts.map((product) => (
              <td key={product._id}>
                <div className="image-container">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
              </td>
            ))}
          </tr>
                    <tr>
                        <td>Brand</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.brand}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Category</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.category}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Color</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.color}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Rating</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                <span style={{ marginRight: "0.1rem" }}>({Number(product.rating)})</span>
                                    <RatingStars rating={Number(product.rating)} />
                                </div>
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <td>Price</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>${product.price}</td>
                        ))}
                    </tr>
                    {/* Add more rows for other features (e.g., Brake, Fuel Capacity, Mileage, etc.) */}
                    <tr>
                        <td>Brake</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.brake}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Fuel Capacity</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.fuelcapacity}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Mileage</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.mileage}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Engine Type</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.enginetype}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Displacement</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.displacement}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Seater</td>
                        {comparedProducts.map((product) => (
                            <td key={product._id}>{product.seater}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        ) : (
            <p>No products selected for comparison.</p>
        )}
    </div>
    </div>
);
};

export default ComparePage;
