import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmationDialog from './DeleteBike';

const Dashboard = () => {
  // Sample bike data
  const bikes = [
    { id: 1, image: '/images/bike1.jpg', title: 'Bike 1', model: 'Model 1' },
    { id: 2, image: '/images/bike1.jpg', title: 'Bike 2', model: 'Model 2' },
    { id: 3, image: '/images/bike1.jpg', title: 'Bike 3', model: 'Model 3' },
  ];

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bikeToDelete, setBikeToDelete] = useState(null);

  const openDeleteDialog = (bike) => {
    setBikeToDelete(bike);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setBikeToDelete(null);
    setDeleteDialogOpen(false);
  };

  return (
    <div>
      <p></p>
      <Link to="/add-bike" className='button-link'>
        Add Bike
      </Link>
      <p></p>
      <table style={{ width: '100%', border: '1px solid #ddd', borderCollapse: 'collapse',padding: '10px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd'}}>Image</th>
            <th style={{ border: '1px solid #ddd' }}>Bike Title</th>
            <th style={{ border: '1px solid #ddd' }}>Bike Model</th>
            <th style={{ border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bikes.map((bike) => (
            <tr key={bike.id}>
              <td style={{ border: '1px solid #ddd' }}>
              <img
                src={bike.image}
                alt="Bike"
                style={{ width: '100px', height: '100px' }}
              />
              </td>
              <td style={{ border: '1px solid #ddd' }}>{bike.title}</td>
              <td style={{ border: '1px solid #ddd' }}>{bike.model}</td>
              <td style={{ border: '1px solid #ddd' }}>
                <Link to={`/view-bike/${bike.id}`} className="button-link">
                  View
                </Link>{' '}
                |{' '}
                <Link to={`/update-bike/${bike.id}`} className="button-link">
                  Update
                </Link>{' '}
                |{' '}
                <button
                  className="button-link"
                  onClick={() => openDeleteDialog(bike)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDeleteDialogOpen && (
  <div className="modal">
    <div className="modal-content">
      <DeleteConfirmationDialog
        bike={bikeToDelete}
        onCancel={closeDeleteDialog}
        onConfirmDelete={() => {
          // Add logic to delete the bike here.
          // After successful deletion, close the dialog.
          closeDeleteDialog();
        }}
      />
    </div>
  </div>
)}
    </div>
  );
};

export default Dashboard;
