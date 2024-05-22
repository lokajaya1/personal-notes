import React from 'react';

function NoteSearch({ setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan..."
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default NoteSearch;
