import { useState } from "react";
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
import { initialNotes } from "./utils/notes";
import CreateNoteForm from "./components/CreateNoteForm";

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const createNote = (title, description) => {
    setNotes((prev) => [
      ...prev,
      {
        id: +new Date(),
        title: title,
        description: description,
        isArchive: false,
      },
    ]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const archiveNote = (id) => {
    const updatedNote = notes.filter((note) => {
      if (note.id === id) {
        note.isArchive = true;
      }
      return note;
    });
    setNotes(updatedNote);
  };

  const unarchiveNote = (id) => {
    const updatedNote = notes.filter((note) => {
      if (note.id === id) {
        note.isArchive = false;
      }
      return note;
    });
    setNotes(updatedNote);
  };

  const activeNotes = notes.filter((note) => note.isArchive === false);

  const archivedNotes = notes.filter((note) => note.isArchive === true);

  return (
    <div className="h-full min-h-screen pb-5 bg-slate-300">
      <Navbar />
      Total Notes: {notes.length}
      <CreateNoteForm createNote={createNote} />
      <NotesList
        notes={activeNotes}
        deleteNote={deleteNote}
        title={"Catatan Aktif"}
        archiveNote={archiveNote}
      />
      <hr className="border border-t border-slate-900" />
      <NotesList
        notes={archivedNotes}
        deleteNote={deleteNote}
        title={"Catatan yang Diarsip"}
        unarchiveNote={unarchiveNote}
      />
    </div>
  );
}

export default App;
