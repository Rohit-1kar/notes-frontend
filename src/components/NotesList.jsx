import React, { useState } from "react";

export default function NotesList({ notes, updateNote, deleteNote }) {
  const [editingId, setEditingId] = useState(null);
  const [editNote, setEditNote] = useState({ subject: "", description: "" });

  const startEdit = (note) => {
    setEditingId(note.id);
    setEditNote({ subject: note.subject, description: note.description });
  };

  const saveEdit = (id) => {
    updateNote(id, editNote);
    setEditingId(null);
  };

  const shareNoteWhatsApp = (note) => {
    const text = `📝 Check out this note:\nSubject: ${note.subject}\nDescription: ${note.description}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      {notes.length === 0 && (
        <div className="alert alert-info text-center">No notes available.</div>
      )}

      <div className="list-group">
        {notes.map((note) => (
          <div
            key={note.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {editingId === note.id ? (
              <div className="d-flex flex-grow-1 gap-2">
                <input
                  type="text"
                  className="form-control"
                  value={editNote.subject}
                  onChange={(e) =>
                    setEditNote({ ...editNote, subject: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="form-control"
                  value={editNote.description}
                  onChange={(e) =>
                    setEditNote({ ...editNote, description: e.target.value })
                  }
                />
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => saveEdit(note.id)}
                >
                  Save
                </button>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div className="flex-grow-1">
                  <h6 className="mb-1">{note.subject}</h6>
                  <p className="mb-0">{note.description}</p>
                </div>
                <div className="btn-group">
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => startEdit(note)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteNote(note.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => shareNoteWhatsApp(note)}
                  >
                    Share on WhatsApp
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
