import React, { useState } from 'react';

const NoteInput = ({ addNote }) => {
  const [note, setNote] = useState({ title: '', body: '' });

  const onTitleChangeHandler = (event) => {
    const newTitle = event.target.value.slice(0, 50);
    setNote((prevNote) => ({
      ...prevNote,
      title: newTitle,
    }));
  };

  const onBodyChangeHandler = (event) => {
    const newBody = event.target.value.slice(0, 500);
    setNote((prevNote) => ({
      ...prevNote,
      body: newBody,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (note.title.trim() === '' || note.body.trim() === '') {
      // Menampilkan pesan kesalahan jika judul atau isi kosong
      alert('Judul dan isi catatan tidak boleh kosong.');
      return;
    }

    if (note.title.length < 3) {
      // Menampilkan pesan kesalahan jika judul terlalu pendek
      alert('Judul catatan harus memiliki setidaknya 3 karakter.');
      return;
    }

    const newNote = {
      id: generateUniqueId(),
      title: note.title.trim(),
      body: note.body.trim(),
      archived: false, // Menambahkan atribut archived dengan nilai false
      createdAt: new Date().toISOString(),
    };

    addNote(newNote);
    setNote({ title: '', body: '' });
  };

  // Fungsi untuk menghasilkan id unik (contoh menggunakan timestamp)
  const generateUniqueId = () => {
    return new Date().getTime().toString();
  };

  return (
    <form className="note-input" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Judul Catatan"
        value={note.title}
        onChange={onTitleChangeHandler}
        maxLength={50} // Batasan karakter judul
        required // Pastikan judul tidak boleh kosong
      />
      <textarea
        placeholder="Isi Catatan"
        value={note.body}
        onChange={onBodyChangeHandler}
        maxLength={500} // Batasan karakter isi
        required // Pastikan isi tidak boleh kosong
      ></textarea>
      <button type="submit">Tambah</button>
    </form>
  );
};

export default NoteInput;
