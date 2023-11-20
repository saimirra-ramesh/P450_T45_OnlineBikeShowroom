import React from 'react';
import { Link } from 'react-router-dom';
import './ComparePage.css';

const ComparePage = () => {
  // Read compared products from local storage
  const comparedProducts = JSON.parse(localStorage.getItem('comparedProducts')) || [];

return (
    <div className="compare-page-container">
        <h2>Compare Products</h2>

        {comparedProducts.length > 0 ? (
            <table className="compare-table">
                <thead>
                    <tr>
                        <th>Features</th>
                        {comparedProducts.map((product) => (
                            <th key={product._id}>
                                <Link to={`/products/${product._id}`}>{product.name}</Link>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Table rows for different features */}
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
                            <td key={product._id}>{product.rating}</td>
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
);
};

export default ComparePage;
