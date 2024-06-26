import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NotesList from "./components/NotesList";
// import { initialNotes } from "./utils/notes";
import CreateNoteForm from "./components/CreateNoteForm";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./services/firebase";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getAllNotes = async () => {
      const notesCollection = collection(db, "notes");

      try {
        const notesSnapshot = await getDocs(notesCollection);
        const allNotes = notesSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setNotes(allNotes);
      } catch (error) {
        console.log(error);
      }
    };

    getAllNotes();
  }, []);

  useEffect(() => {
    const subscribe = onSnapshot(collection(db, "notes"), (q) =>
      setNotes(
        q.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      )
    );

    return () => subscribe();
  }, []);

  const createNote = async (title, description) => {
    const notesCollection = collection(db, "notes");
    try {
      await addDoc(notesCollection, {
        title: title,
        description: description,
        isArchive: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const noteRef = doc(db, "notes", id);
      await deleteDoc(noteRef);
    } catch (error) {
      console.log(error);
    }
  };

  const archiveNote = async (id) => {
    try {
      const noteRef = doc(db, "notes", id);
      await updateDoc(noteRef, {
        isArchive: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const unarchiveNote = async (id) => {
    try {
      const noteRef = doc(db, "notes", id);
      await updateDoc(noteRef, {
        isArchive: false,
      });
    } catch (error) {
      console.log(error);
    }
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
