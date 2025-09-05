import React, { useState } from "react";

export default function NoteForm({ addNote }) {
  const [note, setNote] = useState({ subject: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.subject || !note.description) return;
    addNote(note);
    const text = `📝 Check out this note:\nSubject: ${note.subject}\nDescription: ${note.description}`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
    setNote({ subject: "", description: "" });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            value={note.subject}
            onChange={(e) => setNote({ ...note, subject: e.target.value })}
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={note.description}
            onChange={(e) => setNote({ ...note, description: e.target.value })}
            required
          />
        </div>
        <div className="col-md-2 d-grid">
          <button type="submit" className="btn btn-primary">
            Add Note
          </button>
        </div>
      </div>
    </form>
  );
}
