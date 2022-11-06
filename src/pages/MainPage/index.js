import { useState } from "react";
import { Header } from "../../components/layout/Header";
import { AddNoteForm } from "./components/AddNoteForm";
import { NoteCard } from "./components/NoteCard";

import classes from "./index.module.css";

export const MainPage = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (noteObject) => {
    setNotes((prevNotes) => [...prevNotes, noteObject]);
  };

  console.log(notes);

  return (
    <>
      <Header />
      <AddNoteForm onAddNote={addNote} />
      <div className={classes.notesContainer}>
        {notes.map((noteObjetct) => (
          <NoteCard note={noteObjetct.note} title={noteObjetct.title} />
        ))}
      </div>
    </>
  );
};
