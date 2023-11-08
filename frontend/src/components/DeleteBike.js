// DeleteConfirmationDialog.js
import React from 'react';

const DeleteConfirmationDialog = ({ bike, onCancel, onConfirmDelete }) => {

    const textStyles = {
        color: 'black', // Change the text color to black or a contrasting color
      };


  return (
    <div className="delete-confirmation">
      <h3 style={textStyles}>Are you sure you want to delete this item?</h3>
      <p style={textStyles}>Model: {bike.model}</p>
      <img src={bike.image} alt={bike.model} style={{ maxWidth: '100px', maxHeight: '100px', width: 'auto', height: 'auto' }}/>
      <p></p>
      <button onClick={onConfirmDelete}>Confirm Delete</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteConfirmationDialog;
