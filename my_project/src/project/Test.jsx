import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    axios.get('http://127.0.0.1:8000/api/notes/')
      .then(response => setNotes(response.data))
      .catch(error => console.error("Error fetching notes!", error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`)
      .then(() => fetchNotes())
      .catch(error => console.error('Error deleting note:', error));
  };

  const startEditing = (note) => {
    setEditingNoteId(note.id);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const cancelEditing = () => {
    setEditingNoteId(null);
  };

  const saveEdit = (id) => {
    axios.patch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      title: editTitle,
      content: editContent,
    })
    .then(() => {
      setEditingNoteId(null);
      fetchNotes();
    })
    .catch(error => console.error('Error updating note:', error));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Notes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notes.map(note => (
          <div key={note.id} className="bg-white rounded-lg shadow-md p-5 flex flex-col justify-between">
            {editingNoteId === note.id ? (
              <>
                <input
                  type="text"
                  className="border p-2 rounded mb-2"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <textarea
                  className="border p-2 rounded mb-4"
                  rows="4"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="flex justify-between">
                  <button
                    onClick={() => saveEdit(note.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                  <p className="text-gray-700">{note.content}</p>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => startEditing(note)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
