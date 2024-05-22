// NoteApp.jsx
import React, { useState, useEffect } from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';
import ArsipButton from './ArsipButton';
import { getInitialData, showFormattedDate } from '../utils/index';

const NoteApp = () => {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [archivedNotes, setArchivedNotes] = useState([]);

  const addNote = (newNote) => {
    const noteWithTimestamp = {
      ...newNote,
      id: +new Date(),
      createdAt: new Date().toISOString(),
      archived: false,
    };
    setNotes((prevNotes) => [...prevNotes, noteWithTimestamp]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const toggleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const archiveNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    setNotes(updatedNotes);

    const archivedNote = notes.find((note) => note.id === id);
    setArchivedNotes((prevArchivedNotes) => [...prevArchivedNotes, archivedNote]);
    setShowArchived(true);
  };

  const handleArsip = (id) => {
    archiveNote(id);
  };

  const handleShowArchived = () => {
    setShowArchived(true);
  };

  const filteredNotes = notes.filter((note) =>
    (showArchived ? note.archived : !note.archived) &&
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setNotes(getInitialData());
  }, []);

  return (
    <div className="note-app">
      <h1>Personal Notes</h1>

      <NoteSearch setSearchTerm={setSearchTerm} />
      <NoteInput addNote={addNote} />

      <div className="toggle-buttons">
        <button
          className={!showArchived ? 'active' : ''}
          onClick={() => setShowArchived(false)}
        >
          Catatan
        </button>
        <button
          className={showArchived ? 'active' : ''}
          onClick={handleShowArchived}
        >
          Arsip
        </button>
      </div>

      <h2>{showArchived ? 'Arsip' : 'Catatan'}</h2>

      <NoteList
        notes={filteredNotes}
        archivedNotes={archivedNotes}
        onDelete={deleteNote}
        onToggleArchive={toggleArchive}
        onArsipkan={archiveNote}
        showFormattedDate={showFormattedDate}
        showArchived={showArchived}
      />

      {showArchived && filteredNotes.length > 0 && (
        <ArsipButton
          id={filteredNotes[0].id}
          onArsipkan={() => handleArsip(filteredNotes[0].id)}
          isArchived={showArchived}
        />
      )}
    </div>
  );
};

export default NoteApp;
