import React from 'react';

const NoteItem = ({ id, title, body, createdAt, archived, onDelete, onToggleArchive, onArsipkan, showFormattedDate }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleToggleArchive = () => {
    onToggleArchive(id);
  };

  const handleArsipkan = () => {
    onArsipkan(id);
  };

  return (
    <div className={`note-item ${archived ? 'archived' : ''}`} key={id}>
      <div className="note-item__header">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
      </div>
      <div className="note-item__body">
        <p className="note-item__text">{body}</p>
      </div>
      <div className="note-item__actions">
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="arsip-button" onClick={handleToggleArchive}>
          {archived ? 'Restore Note' : 'Archive Note'}
        </button>
        {onArsipkan && (
          <button className="arsip-button" onClick={handleArsipkan}>
            Arsipkan
          </button>
        )}
      </div>
    </div>
  );
};

export default NoteItem;
