import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Import your CSS file

const AddBike = () => {
  const [formData, setFormData] = useState({
    model: '',
    image: '',
    price: 0,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to add a new bike using the formData
    // Redirect to the dashboard after successful submission
    // You can add the API call logic here or in a separate service
  };

  return (
    <div className="center-content"> {/* Apply centering styles to this div */}
      <h2>Add Bike</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Model Name: </label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Upload Image: </label>
          <input
            type="file"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p></p>
      <Link to="/">Go Back to Dashboard</Link>
    </div>
  );
};

export default AddBike;
