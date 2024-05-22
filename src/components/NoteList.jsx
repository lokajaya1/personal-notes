// NoteList.jsx
import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete, onToggleArchive, showFormattedDate, showArchived }) => {
  const filteredNotes = notes.filter((note) =>
    showArchived ? note.archived : !note.archived
  );

  return (
    <div className="note-list">
      {filteredNotes.length === 0 ? (
        <p>{showArchived ? 'Tidak ada catatan di arsip.' : 'Tidak ada catatan.'}</p>
      ) : (
        filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
            archived={note.archived}
            onDelete={onDelete}
            onToggleArchive={onToggleArchive}
            showFormattedDate={showFormattedDate}
            showArchived={showArchived}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
