import React from 'react';

const DeleteButton = ({ id, onDelete }) => (
  <button className="delete-button" onClick={() => onDelete(id)}>
    Hapus
  </button>
);

export default DeleteButton;
