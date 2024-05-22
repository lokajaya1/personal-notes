// ArsipButton.jsx
import React from 'react';

const ArsipButton = ({ id, isArchived, onArsipkan }) => {
  const handleClick = () => {
    console.log('Button Clicked!');
    archiveNote();
  };

  const archiveNote = () => {

    console.log(`Arsipkan catatan dengan ID: ${id}`);
    onArsipkan(id);
  };


};

export default ArsipButton;
