import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav.js';
import '../adminStyles.css'; 
import { toast } from 'react-toastify';

const AddBike = () => {
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    model: '',
    image: '',
    price: 0,
    description: '',
    brand: '',
    category: '',
    rating: 0,
    color: '',
    brake: '',
    fuelcapacity: '',
    mileage: 0,
    enginetype: '',
    displacement: 0,
    seater: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to add a new bike using the formData
      // NEW
      // const response = await axios.post(`http://localhost:5555/products/add-${formData.category.toLowerCase()}`, formData);
      const response = await axios.post(`http://localhost:5555/products/add-product/${formData.category.toLowerCase()}`, formData);
      // const response = await axios.post('http://localhost:5555/products/add-bike', formData);
      // NEW
      setStatus('Product added successfully');
      toast.success('Product added successfully!');
      // Redirect to the dashboard after successful submission
      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <Nav />
    <div className="center-content">
      <h2>Add Bike</h2>
      
      <form className="add-bike-form" onSubmit={handleSubmit}>
        {/* NEW */}

        <div className="form-group">
        <label>Category: </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="">Select Category</option>
          <option value="bike">Bike</option>
          <option value="scooters">Scooters</option>
          <option value="superbikes">Superbikes</option>
          {/* <option value="usedbikes">Used Bikes</option> */}
        </select>
      </div>

  {/* <div className="form-group">
    <label>Category: </label>
    <input
      type="text"
      name="category"
      value={formData.category}
      onChange={handleInputChange}
    />
  </div> */}
  {/* NEW */}
  <div className="form-group">
    <label>Brand: </label>
    <input
      type="text"
      name="brand"
      value={formData.brand}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Model Name: </label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
  <label>Image URL: </label>
  <input
    type="text"
    name="imageUrl"
    value={formData.imageUrl}
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
  <div className="form-group">
    <label>Description: </label>
    <textarea
      name="description"
      value={formData.description}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Colour: </label>
    <input
      type="text"
      name="color"
      value={formData.color}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Brake: </label>
    <input
      type="text"
      name="brake"
      value={formData.brake}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Fuel Capacity: </label>
    <input
      type="text"
      name="fuelcapacity"
      value={formData.fuelcapacity}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Seater: </label>
    <input
      type="text"
      name="seater"
      value={formData.seater}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Engine Type: </label>
    <input
      type="text"
      name="enginetype"
      value={formData.enginetype}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Displacement: </label>
    <input
      type="number"
      name="displacement"
      value={formData.displacement}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label>Mileage: </label>
    <input
      type="number"
      name="mileage"
      value={formData.mileage}
      onChange={handleInputChange}
    />
  </div>
  <button type="submit">Submit</button>
</form>

      <p style={{ color: 'red' }}>{status}</p>
      <Link to="/admin" style={{color:'black'}}>Go Back to Dashboard</Link>
      <p></p>
    </div>
    </div>
  );
};

export default AddBike;
