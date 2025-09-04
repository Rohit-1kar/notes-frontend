import React, { useState, useEffect } from "react";
import api from "./api";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  };

  const addNote = async (note) => {
    try {
      const res = await api.post("/notes", note);
      setNotes([...notes, res.data]);
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  const updateNote = async (id, updatedNote) => {
    try {
      const res = await api.put(`/notes/${id}`, updatedNote);
      setNotes(notes.map((n) => (n.id === id ? res.data : n)));
    } catch (err) {
      console.error("Error updating note:", err);
    }
  };

  const deleteNote = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      setNotes(notes.filter((n) => n.id !== id));
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Manage Your Notes</h2>
        <NoteForm addNote={addNote} />
        <NotesList notes={notes} updateNote={updateNote} deleteNote={deleteNote} />
      </div>
      <Footer />
    </>
  );
}
