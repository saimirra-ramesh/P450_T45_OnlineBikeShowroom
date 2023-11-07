import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditBike = () => {
  const { bikeId } = useParams();
  const [bike, setBike] = useState(null);

  // Fetch the bike data based on the bikeId from the URL parameter
  useEffect(() => {
    // Make an API call to fetch the bike data with the given bikeId
    // Update the 'bike' state with the retrieved data
  }, [bikeId]);

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBike({ ...bike, [name]: value });
  };

  // Handle form submission to update the bike details
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to update the bike details using the 'bike' state
    // Redirect to the dashboard after successful update
  };

  return (
    <div>
      {bike ? (
        <div>
          <h2>Edit Bike</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Model:</label>
              <input type="text" name="model" value={bike.model} onChange={handleInputChange} />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" name="price" value={bike.price} onChange={handleInputChange} />
            </div>
            {/* Add more form fields for bike details */}
            <button type="submit">Save Changes</button>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default EditBike;
